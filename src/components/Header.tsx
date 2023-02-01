import React, { useState } from 'react'
import { Input, Button } from '@mui/material';
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState<string>('')
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user-token')
        localStorage.removeItem('user-data')
        navigate('/login')
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
                <Button variant='outlined' onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default Header