import { Box, Divider } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Comments } from '../modules/comments'
import { ItemInfo } from '../modules/items'

const Item = () => {
    const { itemId } = useParams()
    
    return (
        <Box sx={{ width: '50%', pt: 2 }}>
            <ItemInfo itemId={Number(itemId)} />
            <Divider light />
            <Comments />
        </Box>
    )
}

export default Item