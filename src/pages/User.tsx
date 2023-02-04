import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Collections } from '../modules/collections'
import { Items } from '../modules/items';

const User = () => {
    return (
        <Box sx={{width: '80%'}}>
            {/* <Grid item xl={2} lg={2} md={3} sm={4} xs={5} sx={{ pt: 2, pl: 4 }}> */}
                <Collections />
            {/* </Grid> */}
            {/* <Grid item xl={10} lg={10} md={9} sm={8} xs={7} sx={{ pt: 2, pl: 4, bgcolor: '#4F8F9' }}>
                <Items />
            </Grid> */}
        </Box>
    )
}

export default User