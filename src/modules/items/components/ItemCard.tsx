import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
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
  const navigate = useNavigate()
  let date = moment(item.createdAt).format('MMMM Do YYYY')

  let user = JSON.parse(localStorage.getItem('user-data') || 'false')
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    const options = {
      userId: Number(user.id),
      id: item.id,
      setIsLike: setIsLike
    }
    if (item.likes.includes(Number(user.id))) {
      dispatch(fetchRemoveLike(options))
    } else {
      dispatch(fetchAddLike(options))
    }
  }

  const handleItem = () => {
    localStorage.setItem('item-id', String(item.id))
    navigate(`/item/${item.id}`)
  }

  if (!item) {
    return (
      <Scelet />
    )
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <FormattedMessage id="app.item-card.body.created" />: {date}
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
        {/* <Typography variant="body2">
          {item?.description}
        </Typography>
        <Typography variant="body2">
          Author: {item?.author}
        </Typography> */}
      </CardContent>
      <Grid container justifyContent='space-between' sx={{ pl: 1 }}>
        <Button sx={{ cursor: 'pointer' }} disabled={!user.id} onClick={handleLike}>
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          <Typography component='span' sx={{ pl: 1 }}>{item.likes}</Typography>
        </Button>
        <CardActions>
          <Button size="small" onClick={handleItem}>
            <FormattedMessage id="app.item-card.body.button" />
          </Button>
        </CardActions>
      </Grid>
    </Card>
  )
}

export default ItemCard