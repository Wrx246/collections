import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { homePath } from '../../../shared/constants/Paths'

export const HomeButton = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate(homePath)
    }

    return (
        <Button color='secondary' onClick={handleHome}>
            <Typography variant='h6'>Home</Typography>
        </Button>
    )
}