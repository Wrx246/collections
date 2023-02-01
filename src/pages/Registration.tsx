import { NavLink, useNavigate } from "react-router-dom";
import { Button, FormLabel, FormControl } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import '../styles/Auth.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchRegistration } from '../store/auth/auth-actions';

const Registration = () => {
    const error = useAppSelector(state => state.authSlice.error)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .min(2, 'minimum 2 characters')
            .max(20, 'maximum 20 characters')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(5, 'minimum 5 characters')
            .max(20, 'maximum 20 characters')
            .required('This field is required'),
        changepassword: Yup.string().when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Both password need to be the same'
            )
        })
    })

    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: '',
                changepassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => dispatch(fetchRegistration({ name: values.userName, email: values.email, password: values.password }, navigate))}
        >
            {({ errors, touched, }) => (
                <Form className='form'>
                    <h2>Registration</h2>
                    <FormControl className='form-body'>
                        <FormLabel>Username</FormLabel>
                        <Field className='form-input' name="userName" placeholder="Username" />
                        {errors.userName && touched.userName ? (
                            <span className='form-error'>{errors.userName}</span>
                        ) : null}
                    </FormControl>

                    <FormControl className='form-body'>
                        <FormLabel>Email</FormLabel>
                        <Field className='form-input' name="email" type="email" placeholder="Email" />
                        {errors.email && touched.email ?
                            <span className='form-error'>{errors.email}</span> : null}
                    </FormControl>

                    <FormControl className='form-body'>
                        <FormLabel>Password</FormLabel>
                        <Field className='form-input' name="password" type="password" placeholder="Password" />
                        {errors.password && touched.password ?
                            <span className='form-error'>{errors.password}</span> : null}
                    </FormControl>

                    <FormControl className='form-body'>
                        <FormLabel>Confirm Password</FormLabel>
                        <Field className='form-input' name="changepassword" type="password" placeholder="Confirm password" />
                        {errors.changepassword && touched.changepassword ?
                            <span className='form-error'>{errors.changepassword}</span> : null}
                    </FormControl>
                    {error ? <span className='form-error'>{error}</span> : null}
                    <Button variant='contained' type='submit'>Registration</Button>
                    <span>Already have account? <NavLink to="/login">Login</NavLink></span>
                </Form>
            )}
        </Formik>
    )
}

export default Registration