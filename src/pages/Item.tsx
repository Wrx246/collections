import { Box, Divider, useMediaQuery } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Comments } from '../modules/comments'
import { ItemInfo } from '../modules/items'

const Item = () => {
    const { itemId } = useParams()
    const matches = useMediaQuery('(min-width:700px)');
    
    return (
        <Box sx={{  pt: 2 }} width={!matches ? '80%' : '50%'}>
            <ItemInfo itemId={Number(itemId)} />
            <Divider light />
            <Comments />
        </Box>
    )
}

export default Item