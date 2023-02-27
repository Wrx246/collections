
import { Typography } from '@mui/material'
import moment from 'moment'
import { FormattedMessage } from "react-intl"
import { ItemType } from '../../models/itemTypes'

type InfoTypes = {
    item: ItemType | null
}

export const InfoFields = ({item}: InfoTypes) => {
    return (
        <>
            {item?.author && <Typography component='span' sx={{ fontSize: 20 }}>
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
            {item?.country && <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id="app.checkbox.country" />: {item.country}
            </Typography>}
            {item?.language && <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id="app.checkbox.language" />: {item.language}
            </Typography>}
            {item?.shortName && <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id="app.checkbox.shortName" />: {item.shortName}
            </Typography>}
            {item?.status !== null && <Typography component='span' sx={{ fontSize: 20 }}>
                {item?.status ? <FormattedMessage id="app.checkbox.use-status" /> : <FormattedMessage id="app.checkbox.not-status" />}
            </Typography>}
            {item?.original !== null && <Typography component='span' sx={{ fontSize: 20 }}>
                {item?.original ? <FormattedMessage id="app.checkbox.original" /> : <FormattedMessage id="app.checkbox.not-original" />}
            </Typography>}
        </>
    )
}