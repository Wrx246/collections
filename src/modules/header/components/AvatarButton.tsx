import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { adminPath, userPath } from '../../../shared/constants/Paths';

export const AvatarButton = () => {
    const navigate = useNavigate();

    const { name, id, role } = JSON.parse(localStorage.getItem('user-data') || '')

    const handleAvatar = () => {
        if(role === 'admin') {
            navigate(adminPath)
        } else {
            navigate(`/user/${id}`)
        }
    }
    return (
        <Avatar sx={{":hover": { cursor: 'pointer'}}} onClick={handleAvatar}>{name}</Avatar>
    )
}