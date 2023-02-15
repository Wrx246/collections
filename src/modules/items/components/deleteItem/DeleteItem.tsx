import React from 'react'
import {
    Grid,
    Modal,
    Typography,
    List,
    ListItem,
    IconButton,
    ListItemText,
    Divider
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux'
import { fetchDeleteItem } from '../../store/actions';

type ModalType = {
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>
    modalDelete: boolean
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

export const DeleteItem = ({ modalDelete, setModalDelete }: ModalType) => {
    const { collectionId } = useParams()
    const handleClose = () => setModalDelete(false);
    const dispatch = useAppDispatch()
    const items = useAppSelector(state => state.itemsReducer.items)

    const handleDelete = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        dispatch(fetchDeleteItem({ id: id, collectionId: Number(collectionId) }));
    };

    return (
        <Modal
            open={modalDelete}
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
                    <FormattedMessage id="app.delete-item.header" />
                </Typography>
                {items.map(i => (
                    <List sx={{ width: '100%' }} key={i.id}>
                        <ListItem
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={(e: React.MouseEvent) => handleDelete(e, i.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={i.title}
                                secondary={moment(i.createdAt).format('MMMM Do YYYY')}
                            />
                        </ListItem>
                        <Divider variant="fullWidth" />
                    </List>
                ))}
            </Grid>
        </Modal >
    )
}