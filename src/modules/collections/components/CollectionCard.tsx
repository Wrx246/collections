import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { CollectionType } from '../models/collection'

type CardType = {
    collection: CollectionType
}

export const CollectionCard = ({ collection }: CardType) => {
    const navigate = useNavigate()

    const handleOpen = () => {
        navigate(`/${collection.id}`)
        localStorage.setItem('collection', JSON.stringify(collection))
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
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
            <CardActions>
                <Button onClick={handleOpen} size="small">
                    <FormattedMessage id="app.item-card.body.button" />
                </Button>
            </CardActions>
        </Card>
    )
}