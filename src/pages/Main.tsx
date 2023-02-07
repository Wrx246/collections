import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { LatestItems } from '../modules/items'

const Main = () => {
  return (
    <Box sx={{ width: '80%', pt: 2 }}>
      <Typography variant='h4'>Latest items</Typography>
      <LatestItems />
      <Divider light />
      <Typography sx={{ pt: 2 }} variant='h4'>Popular collections</Typography>
    </Box>
  )
}

export default Main