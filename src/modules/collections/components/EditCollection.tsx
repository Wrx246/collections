import React, { useState } from 'react'
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography,
    useMediaQuery,
    SelectChangeEvent,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from "react-intl"
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { controls, style, themes } from '../constants/constants'
import { Tags } from './Tags'
import { fetchEdit } from '../store/actions'
import { OptionalControl } from './OptionalControl'

type ModalType = {
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
    edit: boolean
    collectionId: number
}

type FormData = {
    title: string;
    description: string;
    theme: string
};

export const EditCollection = ({ edit, setEdit, collectionId }: ModalType) => {
    const collection = useAppSelector(state => state.collectionsReducer.collections)
        .filter(c => c.id === collectionId)[0]
    const matches = useMediaQuery('(min-width:420px)');
    const [tags, setTags] = useState<string[]>(collection.tags)
    const [tagError, setTagError] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const optional = Object.entries(collection).filter(([key, value]) => value === true)
        .map(o => o[0])
    const [checkControl, setCheckControl] = useState<string[]>(optional);

    const handleClose = () => setEdit(false);
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onBlur" });



    const onSubmit = handleSubmit((data) => {
        let difference = controls.filter(c => !checkControl.includes(c));
        const disabledFields = difference.reduce((acc: any, curr: any) => (acc[curr] = false, acc), {});
        const enabledFields = checkControl.reduce((acc: any, curr: any) => (acc[curr] = true, acc), {});
        if(!tags.length) {
            setTagError(true)
            return
        }
        dispatch(fetchEdit({ ...data, tags: tags, ...enabledFields, ...disabledFields, id: Number(collectionId) }));
        setEdit(false)
        setTags([])
        reset();
    });

    const handleChange = (event: SelectChangeEvent<typeof checkControl>) => {
        const {
            target: { value },
        } = event;
        setCheckControl(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleShow = (e: React.MouseEvent) => {
        e.preventDefault()
        setShow(false)
    }

    return (
        <Modal
            open={edit}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid
                sx={style}
                maxWidth={matches ? 400 : 300}
                container
                alignItems='center'
                justifyContent='center'
                gap={2}
                component="form"
                onSubmit={onSubmit}>
                <Typography sx={{ fontWeight: 600, fontSize: 23 }} component='h6'>
                    <FormattedMessage id="app.edit.header" />
                </Typography>
                <TextField
                    fullWidth
                    id="outlined-title"
                    label={<FormattedMessage id="app.create.title" />}
                    color='primary'
                    variant="outlined"
                    type='text'
                    error={!!errors?.title}
                    defaultValue={collection.title}
                    {...register("title", { required: "Required field!" })}
                    helperText={errors?.title?.message} />
                <TextField
                    fullWidth
                    id="outlined-description"
                    label={<FormattedMessage id="app.create.description" />}
                    color='primary'
                    variant="outlined"
                    type='text'
                    error={!!errors?.description}
                    defaultValue={collection.description}
                    {...register("description", { required: "Required field!" })}
                    helperText={errors?.description?.message} />
                <FormControl fullWidth>
                    <InputLabel id="select-label">
                        <FormattedMessage id="app.create.theme" />
                    </InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        defaultValue={collection.theme}
                        label="Theme"
                        {...register("theme", { required: "Required field!" })}
                        error={!!errors?.theme}>
                        {themes.map(i => (
                            <MenuItem key={i} value={i}>{i}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Tags tags={tags} setTags={setTags} setTagError={setTagError} />
                {show && <Button fullWidth onClick={handleShow} variant="text">
                    <FormattedMessage id="app.create.option-button" />
                </Button>}
                {!show && <OptionalControl checkControl={checkControl} controls={controls} handleChange={handleChange} />}
                <Button color='primary' variant='contained' type='submit'>
                    <FormattedMessage id="app.edit.button" />
                </Button>
            </Grid>
        </Modal>
    )
}