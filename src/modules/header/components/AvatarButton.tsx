import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AvatarButton = () => {
    const navigate = useNavigate();

    const { name } = JSON.parse(localStorage.getItem('user-data') || '')

    const handleAvatar = () => {
        navigate(`/${name}`)
    }
    return (
        <Avatar onClick={handleAvatar}>{name}</Avatar>
    )
}