import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormattedMessage } from "react-intl";

type SettingTypes = {
    handleLoad: () => void
    handleEdit: () => void
    handleDelete: (e: React.MouseEvent) => void
}
const SettingsBar = ({ handleLoad, handleDelete, handleEdit }: SettingTypes) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const ITEM_HEIGHT = 48;
    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleEdit}>
                    <FormattedMessage id="app.user-page.body.edit" />
                </MenuItem>
                <MenuItem onClick={handleLoad}>
                    <FormattedMessage id="app.user-page.body.image" />
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <FormattedMessage id="app.user-page.body.delete" />
                </MenuItem>
            </Menu>
        </>
    )
}

export default SettingsBar