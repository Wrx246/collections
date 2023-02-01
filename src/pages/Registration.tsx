import { NavLink, useNavigate } from "react-router-dom";
import { Button, TextField, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import '../shared/styles/Auth.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchRegistration } from '../store/auth/auth-actions';

type FormData = {
    userName: string;
    email: string;
    password: string;
    confirm: string;
};

const Registration = () => {
    const error = useAppSelector(state => state.authSlice.error)
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
            <h2>Registration</h2>
            <TextField
                fullWidth
                error={!!errors?.userName}
                id="standard-basic"
                {...register("userName", { required: 'Required field!' })}
                helperText={errors?.userName?.message}
                label="Username" variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.email}
                id="standard-basic"
                {...register("email", { required: 'Required field!' })}
                helperText={errors?.email?.message}
                label="Email"
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.password}
                id="standard-basic"
                {...register("password", { required: 'Required field!' })}
                helperText={errors?.password?.message}
                label="Password"
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.confirm}
                id="standard-basic"
                {...register("confirm", { required: 'Required field!' })}
                helperText={errors?.confirm?.message}
                label="Confirm Password"
                variant="standard" />
            {error ? <span className='form-error'>{error}</span> : null}
            <Button sx={{ m: '1.5rem' }} variant='contained' type='submit'>Registration</Button>
            <span>Already have account? <NavLink to="/login">Login</NavLink></span>
        </Grid>
    )
}

export default Registration