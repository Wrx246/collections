import React, { useEffect } from 'react'
import { Grid, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchPopular } from '../store/actions';
import { CollectionCard } from './CollectionCard';

export const Popular = () => {
    const matches = useMediaQuery('(min-width:700px)');
    const dispatch = useAppDispatch()
    const { collections, isLoading } = useAppSelector(state => state.collectionsReducer)

    useEffect(() => {
        dispatch(fetchPopular())
    }, [])

    return (
        <>
            {isLoading ? <Grid
                container
                padding={20}
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            ><CircularProgress /></Grid> :
                <Grid container flexWrap='wrap' justifyContent={matches ? 'start' : 'center'} gap={2} sx={{ mt: 2, mb: 2 }}>
                    {!collections && <Typography variant="h6">Not found collections</Typography>}
                    {collections?.map(c => (
                        <CollectionCard collection={c} />
                    ))}
                </Grid>}
        </>
    )
}