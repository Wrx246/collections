import React, { useState } from 'react'
import { Input, Button, Avatar } from '@mui/material';
import '../shared/styles/Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState<string>('')
    const navigate = useNavigate();

    const { name } = JSON.parse(localStorage.getItem('user-data') || '')

    const handleLogout = () => {
        localStorage.removeItem('user-token')
        localStorage.removeItem('user-data')
        navigate('/login')
    }

    const handleAvatar = () => {
        navigate(`/${name}`)
    }

    return (
        <div className='header'>
            <div className='header-body'>
                <Input
                    className='header-search'
                    type='text'
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    placeholder='Search collections' />
                <div className='header-buttons'>
                    <Avatar onClick={handleAvatar}>{name}</Avatar>
                    <Button variant='outlined' onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </div>
    )
}

export default Header