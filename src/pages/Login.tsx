import { NavLink, useNavigate } from "react-router-dom";
import { Button, FormLabel, FormControl } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import '../styles/Auth.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchLogin } from '../store/auth/auth-actions';

const Login = () => {
    const error = useAppSelector(state => state.authSlice.error)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('This field is required'),
    })

    return (
        <Formik
            initialValues={{
                userName: '',
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => dispatch(fetchLogin({ name: values.userName, password: values.password }, navigate))}
        >
            {({ errors, touched, }) => (
                <Form className='form'>
                    <h2>Login</h2>
                    <FormControl className='form-body'>
                        <FormLabel>Username</FormLabel>
                        <Field className='form-input' name="userName" placeholder="Username" />
                        {errors.userName && touched.userName ? (
                            <span className='form-error'>{errors.userName}</span>
                        ) : null}
                    </FormControl>

                    <FormControl className='form-body'>
                        <FormLabel>Password</FormLabel>
                        <Field className='form-input' name="password" type="password" placeholder="Password" />
                        {errors.password && touched.password ?
                            <span className='form-error'>{errors.password}</span> : null}
                    </FormControl>
                    {error ? <span className='form-error'>{error}</span> : null}
                    <Button variant='contained' type='submit'>Login</Button>
                    <span>No account? <NavLink to='/registration'>Registration</NavLink></span>
                </Form>
            )}
        </Formik>
    )
}

export default Login