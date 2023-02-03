import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from "react-intl";
import { homePath } from '../../../shared/constants/Paths'

export const HomeButton = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate(homePath)
    }

    return (
        <Button color='secondary' onClick={handleHome}>
            <Typography variant='h6'>
                <FormattedMessage id="app.header.home-button" />
            </Typography>
        </Button>
    )
}