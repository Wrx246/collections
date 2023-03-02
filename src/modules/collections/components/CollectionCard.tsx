import React, { useState, useEffect } from 'react'
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../shared/configs/firebase";
import { CollectionType } from '../models/collection'
import { useAppDispatch } from '../../../shared/hooks/redux';
import { fetchDelete } from '../store/actions';
import { FileLoader } from './FileLoader'
import noImage from '../assets/pngtree.jpg'
import SettingsBar from './SettingsBar'
import { EditCollection } from './EditCollection';

type CardType = {
    collection: CollectionType
}

export const CollectionCard = ({ collection }: CardType) => {
    const { userId } = useParams();
    const [modal, setModal] = useState<boolean>(false)
    const [settings, setSettings] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleOpen = () => {
        navigate(`/user/${userId}/${collection.id}`)
        localStorage.setItem('collection', JSON.stringify(collection))
        localStorage.setItem('collection-settings', JSON.stringify(collection.userId))
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch(fetchDelete(Number(collection.id), Number(userId)))
    }

    const handleLoad = () => {
        setModal(true)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-data') || 'false')
        if (collection.userId === Number(userId) || user.name === 'admin') {
            setSettings(true)
        } else {
            setSettings(false)
        }
    }, [collection, userId])

    useEffect(() => {
        const imagesListRef = ref(storage, String(collection?.image));
        getDownloadURL(imagesListRef).then((url) => {
            if (!url) return
            setImage(url)
        }).catch((e) => {
            console.log(e)
        })
    }, [collection])

    console.log(image)

    return (
        <Card sx={{ width: 240 }}>
            <FileLoader
                setModal={setModal}
                modal={modal}
                title={collection.title}
                id={collection.id} />
            <EditCollection edit={edit} setEdit={setEdit} collectionId={collection.id} />
            <CardMedia
                sx={{ height: 140 }}
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
                {settings ?
                    <SettingsBar handleDelete={handleDelete} handleEdit={handleEdit} handleLoad={handleLoad} />
                    : <></>
                }
            </Grid>
        </Card>
    )
}