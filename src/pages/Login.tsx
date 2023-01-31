import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Button, Input, FormLabel, FormControl } from '@mui/material';
import '../styles/Auth.css'

const Login = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <form className='form'>
            <h2>Login</h2>
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
            <Button variant='contained'>Login</Button>
            <span>No account? <NavLink to='/registration'>Registration</NavLink></span>
        </form>
    )
}

export default Login