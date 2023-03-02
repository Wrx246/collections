import { useEffect } from 'react'
import { Typography, Grid, Chip } from '@mui/material'
import moment from 'moment'
import { FormattedMessage } from "react-intl"
import GradeIcon from '@mui/icons-material/Grade';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux'
import { fetchItem } from '../../store/actions'
import BackButton from '../../../../shared/components/BackButton'
import { controls } from '../../constants/constants'
import { InfoFields } from './InfoFields';

type ItemInfoTypes = {
    itemId: number
}

export const ItemInfo = ({ itemId }: ItemInfoTypes) => {
    const item = useAppSelector(state => state.itemsReducer.item!!)
    moment.locale(localStorage.getItem('app.locale') || '')
    let date = moment(item?.createdAt).format('MMMM Do YYYY')

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchItem(itemId))
    }, [itemId])

    let data = controls.filter(c => item?.hasOwnProperty(c))

    return (
        <Grid container direction='column' gap={3} justifyContent='space-between' marginBottom={5}>
            <Grid item container direction='column'>
                <Grid item container direction='row' alignItems='center'>
                    <Typography sx={{ fontSize: 35 }} component='h2'>
                        {item?.title}
                    </Typography>
                    {item?.favorite && <>{item?.favorite ? <GradeIcon /> : <StarOutlineIcon />}</>}
                </Grid>
                <Typography sx={{ color: 'GrayText' }} component='span'>
                    <FormattedMessage id="app.item-card.body.created" />: {date}
                </Typography>
            </Grid>
            <Grid item container direction='column' gap={3}>
                <Typography component='span' sx={{ fontSize: 20 }}>
                    <FormattedMessage id="app.item-card.body.tags" />: <br />
                    {item?.tags.map((t) => <Chip key={t} label={t} variant="outlined" sx={{ marginRight: 3, fontSize: 17 }} />)}
                </Typography>
                <InfoFields item={item} />
                <BackButton />
            </Grid>
        </Grid>
    )
}