import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button'

const Registration = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')

    return (
        <Form className='w-25 d-flex gap-4 flex-column'>
            <h2>Registration</h2>
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
            <Form.Group>
                <Form.Label>
                    Confirm Password
                </Form.Label>
                <Form.Control
                    type='password'
                    value={confirm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value)}
                    placeholder='Confirm password' />
            </Form.Group>
            <Button variant='primary'>Registration</Button>
            <span>Already have account? <NavLink to='/login'>Login</NavLink></span>
        </Form>
    )
}

export default Registration