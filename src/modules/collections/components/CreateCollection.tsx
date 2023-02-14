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
    useMediaQuery
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from "react-intl"
import { useAppDispatch } from '../../../shared/hooks/redux'
import { themes } from '../constants/theme'
import { Tags } from './Tags'
import { fetchCreate } from '../store/actions'

type ModalType = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
}

type FormData = {
    title: string;
    description: string;
    theme: string
};



export const CreateCollection = ({ modal, setModal }: ModalType) => {
    const matches = useMediaQuery('(min-width:420px)');
    const [tags, setTags] = useState<string[]>([])
    const handleClose = () => setModal(false);
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onBlur" });

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const onSubmit = handleSubmit((data) => {
        let user = JSON.parse(JSON.stringify(localStorage.getItem("user-data")))
        dispatch(fetchCreate({ ...data, tags: tags, userId: Number(user.id) }));
        setModal(false)
        setTags([])
        reset();
    });
    return (
        <Modal
            open={modal}
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
                    <FormattedMessage id="app.create.header" />
                </Typography>
                <TextField
                    fullWidth
                    id="outlined-title"
                    label={<FormattedMessage id="app.create.title" />}
                    color='primary'
                    variant="outlined"
                    type='text'
                    error={!!errors?.title}
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
                    {...register("description", { required: "Required field!" })}
                    helperText={errors?.description?.message} />
                <FormControl fullWidth>
                    <InputLabel id="select-label">
                        <FormattedMessage id="app.create.theme" />
                    </InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        defaultValue="Alcohol"
                        label="Theme"
                        {...register("theme", { required: "Required field!" })}
                        error={!!errors?.theme}>
                        {themes.map(i => (
                            <MenuItem key={i} value={i}>{i}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Tags tags={tags} setTags={setTags} />
                <Button color='primary' variant='contained' type='submit'>
                    <FormattedMessage id="app.create.button" />
                </Button>
            </Grid>
        </Modal>
    )
}