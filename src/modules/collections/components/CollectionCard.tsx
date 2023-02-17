import React, { useState, useEffect } from 'react'
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../shared/configs/firebase";
import { CollectionType } from '../models/collection'
import { useAppDispatch } from '../../../shared/hooks/redux';
import { fetchDelete } from '../store/actions';
import { FileLoader } from './FileLoader'
import noImage from '../assets/pngtree.jpg'
import SettingsBar from './SettingsBar'

type CardType = {
    collection: CollectionType
}

export const CollectionCard = ({ collection }: CardType) => {
    const [modal, setModal] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')
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

    const handleLoad = () => {
        setModal(true)
    }

    
    useEffect(() => {
        const imagesListRef = ref(storage, String(collection?.image));
        getDownloadURL(imagesListRef).then((url) => {
            if (!url) return
            setImage(url)
        }).catch((e) => {
            console.log(e)
        })
    }, [collection])

    return (
        <Card sx={{ width: 240 }}>
            <FileLoader
                setModal={setModal}
                modal={modal}
                title={collection.title}
                id={collection.id} />
            <CardMedia
                sx={{height: 140}}
                onClick={handleLoad}
                image={image ? image : noImage}
                component='img'
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
                    <SettingsBar handleDelete={handleDelete} handleLoad={handleLoad} />
            </Grid>
        </Card>
    )
}