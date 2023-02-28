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
import { FormattedMessage } from "react-intl"
import moment from 'moment'
import DeleteIcon from '@mui/icons-material/Delete';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import HttpsIcon from '@mui/icons-material/Https';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { userBlock, userDelete, userUnblock } from '../store/actions';

type ModalType = {
    setModalBlock: React.Dispatch<React.SetStateAction<boolean>>
    modalBlock: boolean
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: 600,
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const BlockPanel = ({ modalBlock, setModalBlock }: ModalType) => {
    moment.locale(localStorage.getItem('app.locale') || '')
    const handleClose = () => setModalBlock(false);
    const dispatch = useAppDispatch()
    const { users } = useAppSelector(state => state.usersReducer)

    const handleBlock = (e: React.MouseEvent, id: number, isActive: boolean) => {
        e.preventDefault()
        if (isActive) {
            dispatch(userBlock(id))
        } else {
            dispatch(userUnblock(id))
        }
    };

    const handleDelete = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        dispatch(userDelete(id))
    };

    return (
        <Modal
            open={modalBlock}
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
                    <FormattedMessage id="app.administration-user.header" />
                </Typography>
                {users.map(u => (
                    <List sx={{ width: '100%' }} key={u.id}>
                        <ListItem
                            secondaryAction={
                                <Grid container direction='row' gap={2}>
                                    <IconButton
                                        edge="end"
                                        aria-label="block"
                                        onClick={(e: React.MouseEvent) => handleBlock(e, u.id, u.isActive)}>
                                        {u.isActive ? <NoEncryptionIcon /> : <HttpsIcon />}
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={(e: React.MouseEvent) => handleDelete(e, u.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            }
                        >
                            <ListItemText
                                primary={u.name}
                                secondary={moment(u.createdAt).format('MMMM Do YYYY')}
                            />
                        </ListItem>
                        <Divider variant="fullWidth" />
                    </List>
                ))}
            </Grid>
        </Modal >
    )
}