import { Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchRegistration } from '../store/actions';

type FormData = {
    userName: string;
    email: string;
    password: string;
    confirm: string;
};

export const RegistrationForm = () => {
    const error = useAppSelector(state => state.registrationReducer.error)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset } = useForm<FormData>({ mode: 'onBlur' });

    const onSubmit = handleSubmit(data => {
        dispatch(fetchRegistration({
            name: data.userName,
            email: data.email,
            password: data.password
        },
            navigate))
        reset()
    });
    return (
        <Grid
            container
            direction="column"
            rowGap={2}
            style={{ maxWidth: '350px', minWidth: '100px' }}
            justifyContent="center"
            alignItems="center"
            component="form"
            onSubmit={onSubmit}
        >
            <Typography variant="h4">Registration</Typography>
            <TextField
                fullWidth
                error={!!errors?.userName}
                id="standard-basic"
                {...register("userName", { required: 'Required field!' })}
                helperText={errors?.userName?.message}
                type='text'
                label="Username"
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.email}
                id="standard-basic"
                {...register("email", { required: 'Required field!' })}
                helperText={errors?.email?.message}
                type='email'
                label="Email"
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.password}
                id="standard-basic"
                {...register("password", { required: 'Required field!' })}
                helperText={errors?.password?.message}
                type='password'
                label="Password"
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.confirm}
                id="standard-basic"
                {...register("confirm", { required: 'Required field!' })}
                helperText={errors?.confirm?.message}
                type='password'
                label="Confirm Password"
                variant="standard" />
            {error ? <span className='form-error'>{error}</span> : null}
            <Button sx={{ m: '1.5rem' }} variant='contained' color="primary" type='submit'>Registration</Button>
            <span>Already have account? <NavLink to="/login">Login</NavLink></span>
        </Grid>
    )
}