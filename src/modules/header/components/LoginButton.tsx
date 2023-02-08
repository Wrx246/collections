import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { loginPath } from '../../../shared/constants/Paths';

export const LoginButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate(loginPath)
    }
    return (
        <Button variant='outlined' color='secondary' onClick={handleLogout}>
            <FormattedMessage id="app.header.login-button" />
        </Button>
    )
}