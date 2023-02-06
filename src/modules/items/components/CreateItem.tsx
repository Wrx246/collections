import React, { useState } from 'react'
import { Button, Grid, Modal, TextField, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { useParams } from 'react-router-dom'
import { fetchCreateItem } from '../store/actions'

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(fetchCreateItem({
            title: title,
            tags: collection,
            collectionId: Number(collectionId)
        }));
        setModal(false)
        setTitle('');
    };
    
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
                    Add item
                </Typography>
                <TextField
                    fullWidth
                    id="outlined-title-item"
                    label="Title"
                    color='primary'
                    variant="outlined"
                    type='text'
                    value={title}
                    onChange={handleChange} />
                <Button color='primary' variant='contained' onClick={handleSubmit}>Create</Button>
            </Grid>
        </Modal>
    )
}