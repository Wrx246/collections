import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

const Preloader = () => {
    return (
        <Grid
            container
            padding={20}
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        ><CircularProgress /></Grid>
    )
}

export default Preloader