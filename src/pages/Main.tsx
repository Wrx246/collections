import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { Popular } from '../modules/collections';
import { LatestItems } from '../modules/items'

const Main = () => {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Box sx={{ width: '80%', pt: 2 }}>
      <Typography variant={matches ? 'h4' : 'h6'}>
        <FormattedMessage id="app.main-page.header.items" />
      </Typography>
      <LatestItems />
      <Divider light />
      <Typography sx={{ pt: 2 }} variant={matches ? 'h4' : 'h6'}>
        <FormattedMessage id="app.main-page.header.collections" />
      </Typography>
      <Popular />
    </Box>
  )
}

export default Main