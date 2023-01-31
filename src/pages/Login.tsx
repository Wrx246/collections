import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, FormLabel, FormControl } from '@mui/material';
import '../styles/Auth.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchLogin } from '../store/auth/auth-actions';

const Login = () => {
    const error = useAppSelector(state => state.authSlice.error)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const r = {name: name, password: password}
        if(password.length && name.length) {
          dispatch(fetchLogin(r, navigate))
        }
      }

    return (
        <form className='form' onSubmit={onSubmitForm}>
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
            {error.length ? <span>{error}</span> : null}
            <Button variant='contained' type='submit'>Login</Button>
            <span>No account? <NavLink to='/registration'>Registration</NavLink></span>
        </form>
    )
}

export default Login