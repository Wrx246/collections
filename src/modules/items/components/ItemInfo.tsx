import React, { useEffect } from 'react'
import { Typography, Grid, Chip } from '@mui/material'
import moment from 'moment'
import { FormattedMessage } from "react-intl"
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchItem } from '../store/actions'
import BackButton from '../../../shared/components/BackButton'

type ItemInfoTypes = {
    itemId: number
}

export const ItemInfo = ({ itemId }: ItemInfoTypes) => {
    const item = useAppSelector(state => state.itemsReducer.item)
    let date = moment(item?.createdAt).format('MMMM Do YYYY')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchItem(itemId))
    }, [itemId])

    return (
        <Grid container direction='column' gap={3} justifyContent='space-between' marginBottom={5}>
            <Grid item container direction='column'>
                <Typography sx={{ fontSize: 35 }} component='h2'>
                    {item?.title}
                </Typography>
                <Typography sx={{ color: 'GrayText' }} component='span'>
                    <FormattedMessage id="app.item-card.body.created" />: {date}
                </Typography>
            </Grid>
            <Grid item container direction='column' gap={3}>
                <Typography component='span' sx={{fontSize: 20}}>
                    <FormattedMessage id="app.item-card.body.tags" />: <br/>
                    {item?.tags.map((t) => <Chip key={t} label={t} variant="outlined" sx={{marginRight: 3, fontSize: 17}} />)}
                </Typography>
                <BackButton />
            </Grid>
        </Grid>
    )
}