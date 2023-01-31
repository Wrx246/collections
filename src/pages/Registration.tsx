import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, FormLabel, FormControl } from '@mui/material';
import '../styles/Auth.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchRegistration } from '../store/auth/auth-actions';

const Registration = () => {
    const error = useAppSelector(state => state.authSlice.error)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')

    const onSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const r = {name: name, email: email, password: password}
        if(password === confirm) {
          dispatch(fetchRegistration(r, navigate))
        }
      }

    return (
        <form className='form' onSubmit={onSubmitForm}>
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
                <FormLabel>Email</FormLabel>
                <Input
                    type='email'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder='Enter email' />
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
            {error ? <span>{error}</span> : null}
            <Button variant='contained' type='submit'>Registration</Button>
            <span>Already have account? <NavLink to='/login'>Login</NavLink></span>
        </form>
    )
}

export default Registration