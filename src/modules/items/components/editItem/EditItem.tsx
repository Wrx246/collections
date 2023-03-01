import React, { useState } from 'react'
import { Button, Grid, Modal, Typography, TextField } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux'
import { fetchEditItem } from '../../store/actions'
import { EditField } from './EditField'

type ModalType = {
    setModalEdit: React.Dispatch<React.SetStateAction<boolean>>
    modalEdit: boolean
    editId: number
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

export const EditItem = ({ modalEdit, setModalEdit, editId }: ModalType) => {
    
    const handleClose = () => setModalEdit(false);
    const dispatch = useAppDispatch()
    const items = useAppSelector(state => state.itemsReducer.items)
        .filter(i => i.id === editId)[0]

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onBlur" });

    const onSubmit = handleSubmit((data) => {
        dispatch(fetchEditItem({ ...data, id: editId }));
        setModalEdit(false)
        reset();
    });
    const [show, setShow] = useState<boolean>(!modalEdit)

    const handleShow = (e: React.MouseEvent) => {
        e.preventDefault()
        setShow(false)
    }

    return (
        <Modal
            open={modalEdit}
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
                    <FormattedMessage id="app.user-page.body.edit-item" />
                </Typography>
                <TextField
                    fullWidth
                    id='outlined-title-item'
                    label={<FormattedMessage id="app.create.title" />}
                    color='primary'
                    variant="outlined"
                    type='text'
                    error={!!errors?.title}
                    defaultValue={items?.title}
                    {...register("title", { required: "Required field!" })}
                    helperText={errors?.title?.message} />
                {show && <Button fullWidth onClick={handleShow} variant="text">
                    <FormattedMessage id="app.create.option-button" />
                </Button>}
                {!show && <>
                    <EditField errors={errors} items={items} register={register} />
                </>
                }
                <Button color='primary' variant='contained' onClick={onSubmit}>
                    <FormattedMessage id="app.edit.button" />
                </Button>
            </Grid>
        </Modal>
    )
}