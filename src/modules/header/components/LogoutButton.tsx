import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { loginPath } from '../../../shared/constants/Paths';

export const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user-token')
        localStorage.removeItem('user-data')
        navigate(loginPath)
    }
    return (
        <Button variant='outlined' color='secondary' onClick={handleLogout}>
            Logout
        </Button>
    )
}