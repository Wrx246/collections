import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { FormattedMessage } from "react-intl";
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
            <Typography variant="h4">
                <FormattedMessage id="app.registration-page.header" />
            </Typography>
            <TextField
                fullWidth
                error={!!errors?.userName}
                id="standard-basic-user"
                {...register("userName", { required: 'Required field!' })}
                helperText={errors?.userName?.message}
                type='text'
                label={<FormattedMessage id="app.registration-page.user-name" />}
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.email}
                id="standard-basic-email"
                {...register("email", { required: 'Required field!' })}
                helperText={errors?.email?.message}
                type='email'
                label={<FormattedMessage id="app.registration-page.email" />}
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.password}
                id="standard-basic-password"
                {...register("password", { required: 'Required field!' })}
                helperText={errors?.password?.message}
                type='password'
                label={<FormattedMessage id="app.registration-page.password" />}
                variant="standard" />
            <TextField
                fullWidth
                error={!!errors?.confirm}
                id="standard-basic-confirm"
                {...register("confirm", { required: 'Required field!' })}
                helperText={errors?.confirm?.message}
                type='password'
                label={<FormattedMessage id="app.registration-page.confirm" />}
                variant="standard" />
            {error ? <span style={{ color: 'red' }}>{error}</span> : null}
            <Button sx={{ m: '1.5rem' }} variant='contained' color="primary" type='submit'>
                <FormattedMessage id="app.registration-page.button" />
            </Button>
            <span><FormattedMessage id="app.registration-page.text" />
                <NavLink to="/login">
                    <FormattedMessage id="app.registration-page.link" />
                </NavLink></span>
        </Grid>
    )
}