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
import SettingsIcon from '@mui/icons-material/Settings';
import { FormattedMessage } from "react-intl"
import moment from 'moment'
import { useAppSelector } from '../../../../shared/hooks/redux'

type ModalType = {
    setSelectEdit: React.Dispatch<React.SetStateAction<boolean>>
    selectEdit: boolean
    handleSettings: (e: React.MouseEvent, id: number) => void
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

export const EditSelect = ({ selectEdit, setSelectEdit, handleSettings }: ModalType) => {
    moment.locale(localStorage.getItem('app.locale') || '')
    const handleClose = () => setSelectEdit(false);
    const items = useAppSelector(state => state.itemsReducer.items)

    const handleChange = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        handleSettings(e, id)
    };

    return (
        <Modal
            open={selectEdit}
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
                {items.map(i => (
                    <List sx={{ width: '100%' }} key={i.id}>
                        <ListItem
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="change"
                                    onClick={(e: React.MouseEvent) => handleChange(e, i.id)}>
                                    <SettingsIcon />
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