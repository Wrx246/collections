import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux'
import { Comments } from '../modules/comments'

const Item = () => {
    const { itemId } = useParams()
    const item = useAppSelector(state => state.itemsReducer.items)
        .filter(i => i.id === Number(itemId))[0]
    let date = moment(item.createdAt).format('MMMM Do YYYY')


    return (
        <Box sx={{ width: '80%', pt: 2 }}>
            <Typography sx={{ fontSize: 35 }} component='h2'>
                {item.title}
            </Typography>
            <Typography sx={{ color: 'GrayText' }} component='span'>
                Created: {date}
            </Typography>
            <Comments />
        </Box>
    )
}

export default Item