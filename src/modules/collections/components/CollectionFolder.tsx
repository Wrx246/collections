import { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Fab, Grid, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CollectionType } from '../models/collection';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { useNavigate } from 'react-router-dom';
import { userPath } from '../../../shared/constants/Paths';
import { fetchDelete } from '../store/actions';

type FolderType = {
    collections: CollectionType,
}

export const CollectionFolder = ({ collections }: FolderType) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const style = [
        {
            '&:hover': {
                backgroundColor: '#6954D6',
                cursor: 'pointer',
                fontWeight: 700
            }
        },
        {
            p: 2,
        }
    ]

    const handleOpen = () => {
        navigate(`/${collections.id}`)
        localStorage.setItem('collection', JSON.stringify(collections))
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        let user = JSON.parse(localStorage.getItem('user-data') || '')
        dispatch(fetchDelete(Number(collections.id), Number(user.id)))
    }

    return (
        <Grid container
            sx={style}
            gap={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            onClick={handleOpen}>
            <Grid item container sx={{ maxWidth: { xs: 180, md: 367, sm: 350, lg: 550, xl: 550 } }} direction='row' alignItems='center' gap={1}>
                <FolderIcon />
                <Grid item >
                    <Typography component='span' sx={{fontWeight: 700}}>{collections.title}</Typography>
                    <br />
                    <Typography component='span'>{collections.theme}</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Fab variant='circular' sx={{ maxWidth: 35, maxHeight: 15 }} onClick={handleDelete} aria-label="delete">
                    <DeleteForeverIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}