
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

    useEffect(() => {
        if (item !== null) {
            const { collectionId, id, likes, createdAt, tags, title, updatedAt, ...rest } = item
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
        </>
    )
}