import { Grid, Typography } from '@mui/material'
import { FormattedMessage } from "react-intl";
import ItemCard from './ItemCard'
import { useAppSelector } from '../../../shared/hooks/redux'

export const SearchItems = () => {
    const items = useAppSelector(state => state.searchReducer.items)
    const tagItems = useAppSelector(state => state.tagsReducer.items)
    return (
        <Grid container direction='column' sx={{ p: 10 }}>
            <Grid item container direction='row' justifyContent='space-between'>
                <Typography sx={{ fontWeight: 600 }} variant='h4'>
                    <FormattedMessage id="app.search-page.header.items" />
                </Typography>
            </Grid>
            {tagItems.length ?
                <Grid item container direction='row' gap={2} sx={{ mt: 2 }}>
                    {tagItems.map(i => (
                        <ItemCard key={i.id} item={i} />
                    ))}
                </Grid>
                : <Grid item container direction='row' gap={2} sx={{ mt: 2 }}>
                    {items.map(i => (
                        <ItemCard key={i.id} item={i} />
                    ))}
                </Grid>
            }
        </Grid>
    )
}