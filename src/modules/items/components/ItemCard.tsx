import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment'
import { ItemType } from '../models/itemTypes'
import { useAppDispatch } from '../../../shared/hooks/redux';
import { fetchAddLike, fetchRemoveLike } from '../store/actions';
import { Scelet } from './Scelet';

type CardType = {
  item: ItemType
}

const ItemCard = ({ item }: CardType) => {
  const [isLike, setIsLike] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  let date = moment(item.createdAt).format('MMMM Do YYYY')

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    // if(isLike === true) {
    //   dispatch(fetchRemoveLike(item.id, setIsLike))
    // } else {
    //   dispatch(fetchAddLike(item.id, setIsLike))
    // }
  }

  if(!item) {
    return (
      <Scelet />
    )
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Created: {date}
        </Typography>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Box display='flex' flexDirection='row' gap={1} >
          {item.tags.map((tag, index) => (
            <Typography key={index} sx={{ mb: 1.5 }} color="text.secondary">
              "{tag}"
            </Typography>
          ))}
        </Box>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Grid container justifyContent='space-between' sx={{ pl: 1 }}>
        <CardActions sx={{ cursor: 'pointer' }} onClick={handleLike}>
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          <Typography component='span' sx={{ pl: 1 }}>{item.likes}</Typography>
        </CardActions>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Grid>
    </Card>
  )
}

export default ItemCard