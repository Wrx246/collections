import { Grid, Typography } from '@mui/material'
import React from 'react'
import { FormattedMessage } from "react-intl";
import { Collections } from '../modules/collections'

const User = () => {
    return (
        <Grid container direction='row'>
            <Grid item xl={2} lg={2} md={3} sm={4} xs={5} sx={{ pt: 2, pl: 4 }}>
                <Collections />
            </Grid>
            <Grid item xl={10} lg={10} md={9} sm={8} xs={7} sx={{ pt: 2, pl: 4, bgcolor: '#4F8F9' }}>
                <Typography sx={{ fontWeight: 700 }} variant='h6'>
                    <FormattedMessage id="app.user-page.body.items" />
                </Typography>
            </Grid>
        </Grid>
    )
}

export default User