import { useState } from 'react'
import { IconButton, Button, Menu, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormattedMessage } from "react-intl";

type PopupTypes = {
    handleCreate: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export const Popup = ({handleCreate}: PopupTypes) => {
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
                <MenuItem onClick={handleClose}>
                    <FormControl>
                        <InputLabel id="select-sort">
                            <FormattedMessage id="app.user-page.body.sort" />
                        </InputLabel>
                        <Select
                            sx={{ maxHeight: 35, minWidth: 120 }}
                            labelId="select-label"
                            id="select"
                            defaultValue="Date added"
                            label={<FormattedMessage id="app.user-page.body.sort" />}>
                            <MenuItem value='Date added'>
                                <FormattedMessage id="app.user-page.body.sort-date" />
                            </MenuItem>
                            <MenuItem value='Likes'>
                                <FormattedMessage id="app.user-page.body.sort-likes" />
                            </MenuItem>
                            <MenuItem value='Comments'>
                                <FormattedMessage id="app.user-page.body.sort-comments" />
                            </MenuItem>
                        </Select>
                    </FormControl>
                </MenuItem>
                <MenuItem>
                    <Button color='primary' variant='contained' onClick={handleCreate}>
                        <FormattedMessage id="app.user-page.body.add" />
                    </Button>
                </MenuItem>
            </Menu>
        </>
    );
}