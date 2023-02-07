import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchLatest } from '../store/actions'
import ItemCard from './ItemCard'

export const LatestItems = () => {
    const dispatch = useAppDispatch()
    const {items, isLoading} = useAppSelector(state => state.itemsReducer)

    useEffect(() => {
        dispatch(fetchLatest())
    }, [])

    return (
        <Grid container flexWrap='wrap' gap={2} sx={{ mt: 2, mb: 2 }}>
            {items?.map(i => (
                <ItemCard key={i.id} item={i} />
            ))}
        </Grid>
    )
}