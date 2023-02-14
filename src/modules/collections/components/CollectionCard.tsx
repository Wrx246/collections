import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, CardActions, IconButton, Grid } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { CollectionType } from '../models/collection'
import { useAppDispatch } from '../../../shared/hooks/redux';
import { fetchDelete } from '../store/actions';

type CardType = {
    collection: CollectionType
}

export const CollectionCard = ({ collection }: CardType) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleOpen = () => {
        navigate(`/${collection.id}`)
        localStorage.setItem('collection', JSON.stringify(collection))
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        let user = JSON.parse(localStorage.getItem('user-data') || '')
        dispatch(fetchDelete(Number(collection.id), Number(user.id)))
    }

    return (
        <Card sx={{ maxWidth: 290 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                title={collection.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {collection.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {collection.description}
                </Typography>
            </CardContent>
            <Grid container justifyContent='space-between'>
                <CardActions>
                    <Button onClick={handleOpen} size="small">
                        <FormattedMessage id="app.item-card.body.button" />
                    </Button>
                </CardActions>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    // aria-controls={open ? 'long-menu' : undefined}
                    // aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleDelete}
                >
                    <MoreVertIcon />
                </IconButton>
            </Grid>
        </Card>
    )
}