import { useEffect } from 'react'
import { Typography, Grid, Chip } from '@mui/material'
import moment from 'moment'
import { FormattedMessage } from "react-intl"
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchItem } from '../store/actions'
import BackButton from '../../../shared/components/BackButton'
import { controls } from '../constants/constants'

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

    let data = controls.filter(c => item?.hasOwnProperty(c))

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
                <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.item-card.body.tags" />: <br />
                    {item?.tags.map((t) => <Chip key={t} label={t} variant="outlined" sx={{ marginRight: 3, fontSize: 17 }} />)}
                </Typography>
                <Typography component='span' sx={{ fontSize: 20 }}>
                    {data?.map(d => (
                        <><FormattedMessage id={`app.checkbox.${d}`} />: </>
                    ))}
                </Typography>
                {/* {item?.author && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.author" />: {item.author}
                </Typography>}
                {item?.comment && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.comment" />: {item.comment}
                </Typography>}
                {item?.additionalInfo && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.info" />: {item.additionalInfo}
                </Typography>}
                {item?.publication && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.publication" />: {moment(item?.publication).format('MMMM Do YYYY')}
                </Typography>}
                {item?.foundation && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.foundation" />: {moment(item?.foundation).format('MMMM Do YYYY')}
                </Typography>}
                {item?.terminated && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.terminated" />: {moment(item?.terminated).format('MMMM Do YYYY')}
                </Typography>}
                {item?.price && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.price" />: {item.price}
                </Typography>}
                {item?.reward && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.reward" />: {item.reward}
                </Typography>}
                {item?.score && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.score" />: {item.score}
                </Typography>}
                {item?.favorite && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.favorite" />: {item.favorite}
                </Typography>}
                {item?.country && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.country" />: {item.country}
                </Typography>}
                {item?.language && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.language" />: {item.language}
                </Typography>}
                {item?.shortName && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.shortName" />: {item.shortName}
                </Typography>}
                {item?.status && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.status" />: {item.status}
                </Typography>}
                {item?.original && <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.checkbox.original" />: {item.original}
                </Typography>} */}
                <BackButton />
            </Grid>
        </Grid>
    )
}