import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import moment from 'moment'
import { FormattedMessage } from "react-intl"
import { ItemType } from '../../models/itemTypes'

type InfoTypes = {
    item: ItemType;
}

export const InfoFields = ({ item }: InfoTypes) => {
    moment.locale(localStorage.getItem('app.locale') || '')
    const [items, setItems] = useState<[string, any][]>([])
    let foundation = moment(item?.foundation).format('MMMM Do YYYY')
    let terminated = moment(item?.terminated).format('MMMM Do YYYY')
    let publication = moment(item?.publication).format('MMMM Do YYYY')

    useEffect(() => {
        if (item !== null) {
            const {
                collectionId,
                foundation,
                terminated,
                publication,
                id,
                likes,
                createdAt,
                tags,
                title,
                favorite,
                status,
                original,
                updatedAt,
                ...rest } = item
            const data = Object.entries(rest).filter(([key, value]) => value !== null)
            setItems(data)
        }
    }, [item])

    return (
        <>
            {items.map(i => {
                return (
                    <Typography key={i[0]} component='span' sx={{ fontSize: 20 }}>
                        <FormattedMessage id={`app.checkbox.${i[0]}`} />: {i[1]}
                    </Typography>
                )
            })}
            <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id={`app.checkbox.foundation`} />: {foundation}
            </Typography>
            <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id={`app.checkbox.terminated`} />: {terminated}
            </Typography>
            <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id={`app.checkbox.publication`} />: {publication}
            </Typography>
            <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id={`app.checkbox.status`} />:
                {item?.status ? <FormattedMessage id={`app.checkbox.status-true`} />
                    : <FormattedMessage id={`app.checkbox.status-false`} />}
            </Typography>
            <Typography component='span' sx={{ fontSize: 20 }}>
                <FormattedMessage id={`app.checkbox.original`} />:
                {item?.original ? <FormattedMessage id={`app.checkbox.original`} />
                    : <FormattedMessage id={`app.checkbox.original-false`} />}
            </Typography>
        </>
    )
}