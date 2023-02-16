import React, { useEffect } from 'react'
import { Grid, CircularProgress, useMediaQuery } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchLatest } from '../store/actions'
import ItemCard from './ItemCard'
import Preloader from '../../../shared/components/Preloader'

export const LatestItems = () => {
    const matches = useMediaQuery('(min-width:700px)');
    const dispatch = useAppDispatch()
    const { items, isLoading } = useAppSelector(state => state.itemsReducer)

    useEffect(() => {
        dispatch(fetchLatest())
    }, [])

    return (
        <>
            {isLoading ? <Preloader /> :
                <Grid container flexWrap='wrap' justifyContent={matches ? 'start' : 'center'} gap={2} sx={{ mt: 2, mb: 2 }}>
                    {items?.slice(0, 5).map(i => (
                        <ItemCard key={i.id} item={i} />
                    ))}
                </Grid>}
        </>
    )
}