import React, { useState } from 'react'
import { Button, Grid, Modal, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { fetchCreateItem } from '../../store/actions'
import { CreateField } from './CreateField'

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
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const CreateItem = ({ modal, setModal }: ModalType) => {
    const { collectionId } = useParams()
    const handleClose = () => setModal(false);
    const dispatch = useAppDispatch()
    const collections = useAppSelector(state => state.collectionsReducer.collections)
        .filter(c => c.id === Number(collectionId))[0]
    const storageColl = JSON.parse(localStorage.getItem('collection') || String(collections))
    const [collection] = useState(storageColl.tags)

    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [show, setShow] = useState<boolean>(!modal)

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(fetchCreateItem({
            title: title,
            // author: author,
            // description: description,
            // date: date,
            tags: collection,
            collectionId: Number(collectionId)
        }));
        setModal(false)
        setTitle('');
    };

    const handleShow = (e: React.MouseEvent) => {
        e.preventDefault()
        setShow(false)
    }

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
                <CreateField
                    type='text'
                    value={title}
                    fieldId='outlined-title-item'
                    label="app.create.title"
                    setValue={setTitle} />
                {show && <Button fullWidth onClick={handleShow} variant="text">
                    <FormattedMessage id="app.create.option-button" />
                </Button>}
                {!show && <>
                    <CreateField
                        type='date'
                        value={date}
                        fieldId='outlined-date-item'
                        setValue={setDate} />
                    <CreateField
                        type='text'
                        value={description}
                        fieldId='outlined-description-item'
                        label="app.create.description"
                        setValue={setDescription} />
                    <CreateField
                        type='text'
                        value={author}
                        fieldId='outlined-author-item'
                        label="app.create.author"
                        setValue={setAuthor} />
                </>
                }
                <Button color='primary' variant='contained' onClick={handleSubmit}>
                    <FormattedMessage id="app.create.button" />
                </Button>
            </Grid>
        </Modal>
    )
}