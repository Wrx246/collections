import React, { useEffect } from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'
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
        <Grid container direction='row' justifyContent='space-between'>
            <Grid item>
                <BackButton />
                <Typography sx={{ fontSize: 35 }} component='h2'>
                    {item?.title}
                </Typography>
                <Typography sx={{ color: 'GrayText' }} component='span'>
                    <FormattedMessage id="app.item-card.body.created" />: {date}
                </Typography>
            </Grid>
            <Grid item>
                <Box component='img' sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 167, md: 167, sm: 350, lg: 450, xl: 550 },
                    maxWidth: { xs: 250, md: 250, sm: 350, lg: 450, xl: 550 },
                }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
            </Grid>
        </Grid>
    )
}