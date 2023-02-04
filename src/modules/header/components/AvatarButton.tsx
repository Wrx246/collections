import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userPath } from '../../../shared/constants/Paths';

export const AvatarButton = () => {
    const navigate = useNavigate();

    const { name } = JSON.parse(localStorage.getItem('user-data') || '')

    const handleAvatar = () => {
        navigate(userPath)
    }
    return (
        <Avatar onClick={handleAvatar}>{name}</Avatar>
    )
}