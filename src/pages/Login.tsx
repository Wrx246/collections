import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'

const Login = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <Form className='w-25 d-flex gap-4 flex-column'>
            <h2>Login</h2>
            <Form.Group>
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control
                    type='text'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder='Enter name' />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control
                    type='password'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    placeholder='Enter password' />
            </Form.Group>
            <Button variant='primary'>Login</Button>
            <span>No account? <NavLink to='/registration'>Registration</NavLink></span>
        </Form>
    )
}

export default Login