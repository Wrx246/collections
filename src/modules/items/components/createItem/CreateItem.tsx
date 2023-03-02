import React, { useState, useEffect } from 'react'
import { Button, Grid, Modal, Typography, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux'
import { fetchCreateItem } from '../../store/actions'
import { CreateField } from './CreateField'
import { fetchCollections } from '../../../collections/store/actions'

type ModalType = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll',
};

type FormData = {
    title: string;
    description: string;
    theme: string;
    author?: string;
    comment?: string;
    additionalInfo?: string;
    publication?: string;
    foundation?: string;
    price?: number;
    reward?: number;
    score?: number;
    favorite?: boolean;
    country?: string;
    language?: string;
    shortName?: string;
    status?: boolean;
    terminated?: string;
    original?: boolean;
};

export const CreateItem = ({ modal, setModal }: ModalType) => {
    const { collectionId, userId } = useParams()
    const handleClose = () => setModal(false);
    const dispatch = useAppDispatch()
    const collections = useAppSelector(state => state.collectionsReducer.collections)
        .filter(c => c.id === Number(collectionId))[0]
    const storageColl = JSON.parse(localStorage.getItem('collection') || String(collections))
    const [collection] = useState<string[]>(storageColl.tags)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onBlur" });

    const onSubmit = handleSubmit((data) => {
        dispatch(fetchCreateItem({ ...data, tags: collection, collectionId: Number(collectionId) }));
        setModal(false)
        reset();
    });
    const [show, setShow] = useState<boolean>(!modal)

    const handleShow = (e: React.MouseEvent) => {
        e.preventDefault()
        setShow(false)
    }

    useEffect(() => {
        dispatch(fetchCollections(Number(userId)))
    }, [])

    return (
        <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid
                sx={style}
                container
                alignItems='center'
                justifyContent='center'
                gap={2}>
                <Typography sx={{ fontWeight: 600, fontSize: 23 }} component='h6'>
                    <FormattedMessage id="app.create-item.header" />
                </Typography>
                <TextField
                    fullWidth
                    id='outlined-title-item'
                    label={<FormattedMessage id="app.create.title" />}
                    color='primary'
                    variant="outlined"
                    type='text'
                    error={!!errors?.title}
                    {...register("title", { required: "Required field!" })}
                    helperText={errors?.title?.message} />
                {show && <Button fullWidth onClick={handleShow} variant="text">
                    <FormattedMessage id="app.create.option-button" />
                </Button>}
                {!show && <>
                    <CreateField collections={collections} register={register} errors={errors} />
                    <FormGroup row>
                        {collections.status && <FormControlLabel
                            control={<Checkbox />}
                            label={<FormattedMessage id="app.checkbox.status" />}
                            {...register("status", { required: "Required field!" })} />}
                        {collections.favorite && <FormControlLabel
                            control={<Checkbox />}
                            label={<FormattedMessage id="app.checkbox.favorite" />}
                            {...register("favorite", { required: "Required field!" })} />}
                        {collections.original && <FormControlLabel
                            control={<Checkbox />}
                            label={<FormattedMessage id="app.checkbox.original" />}
                            {...register("original", { required: "Required field!" })} />}

                    </FormGroup>
                </>
                }
                <Button color='primary' variant='contained' onClick={onSubmit}>
                    <FormattedMessage id="app.create.button" />
                </Button>
            </Grid>
        </Modal>
    )
}