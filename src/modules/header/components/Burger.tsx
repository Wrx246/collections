import React, { useState } from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FormattedMessage } from "react-intl"
import { useNavigate } from 'react-router-dom';
import { loginPath, userPath, homePath, adminPath } from '../../../shared/constants/Paths';
import { SwitchWidget } from '../../themeSwitcher';
import { LocaleSelect } from '../../localization';

export const Burger = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { name, role } = JSON.parse(localStorage.getItem('user-data') || '')
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNavigate = (path: string) => {
        setAnchorEl(null);
        if (path === loginPath) {
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-data')
            navigate(path)
        } else if (path === userPath) {
            if (role === 'admin') {
                navigate(adminPath)
            } else {
                navigate(userPath)
            }
        } else {
            navigate(homePath)
        }
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleNavigate(homePath)}>
                    <FormattedMessage id="app.burger.home" />
                </MenuItem>
                <MenuItem>
                    <FormattedMessage id="app.create.theme" />: <SwitchWidget />
                </MenuItem>
                <MenuItem>
                    <LocaleSelect />
                </MenuItem>
                {name && <MenuItem onClick={() => handleNavigate(userPath)}>
                    {name}
                </MenuItem>}
                {name ?
                    <MenuItem onClick={() => handleNavigate(loginPath)}>
                        <FormattedMessage id="app.header.logout-button" />
                    </MenuItem>
                    : <MenuItem onClick={() => handleNavigate(loginPath)}>
                        <FormattedMessage id="app.header.login-button" />
                    </MenuItem>
                }
            </Menu>
        </div>
    );
}