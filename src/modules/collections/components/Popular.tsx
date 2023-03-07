import React, { useEffect } from 'react'
import { Grid, useMediaQuery, Typography } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchPopular } from '../store/actions';
import { CollectionCard } from './CollectionCard';
import Preloader from '../../../shared/components/Preloader';

export const Popular = () => {
    const matches = useMediaQuery('(min-width:700px)');
    const dispatch = useAppDispatch()
    const { collections, isLoading } = useAppSelector(state => state.collectionsReducer)

    useEffect(() => {
        dispatch(fetchPopular())
    }, [])

    return (
        <>
            {isLoading ? <Preloader /> :
                <Grid
                    container
                    flexWrap='wrap'
                    justifyContent={matches ? 'start' : 'center'}
                    gap={2}
                    sx={{ mt: 2, mb: 2 }}>
                    {!collections && <Typography variant="h6">
                        <FormattedMessage id="app.main-page.collections-not-found" />
                    </Typography>}
                    {collections?.map(c => (
                        <CollectionCard key={c.id} collection={c} />
                    ))}
                </Grid>}
        </>
    )
}