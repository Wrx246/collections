import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from "react-intl"

const BackButton = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <Button sx={{maxWidth: 35}} variant='contained' color='primary' onClick={handleBack}>
            <FormattedMessage id="app.components.back-button" />
        </Button>
    )
}

export default BackButton