import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Button, Input, FormLabel, FormControl } from '@mui/material';
import '../styles/Auth.css'

const Registration = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')

    return (
        <form className='form'>
            <h2>Registration</h2>
            <FormControl className='form-input'>
                <FormLabel>Username</FormLabel>
                <Input
                    type='text'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder='Enter name' />
            </FormControl>
            <FormControl className='form-input'>
                <FormLabel>Password</FormLabel>
                <Input
                    type='password'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    placeholder='Enter password' />
            </FormControl>
            <FormControl className='form-input'>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    type='password'
                    value={confirm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value)}
                    placeholder='Confirm password' />
            </FormControl>
            <Button variant='contained'>Registration</Button>
            <span>Already have account? <NavLink to='/login'>Login</NavLink></span>
        </form>
    )
}

export default Registration