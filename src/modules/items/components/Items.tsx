import { useState } from 'react'
import { useEffect } from 'react'
import { Grid, Typography, CircularProgress, useMediaQuery } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useParams } from 'react-router-dom';
import { SettingsBar } from "./SettingsBar";
import ItemCard from "./ItemCard";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { fetchItems } from '../store/actions';
import { CreateItem } from './CreateItem';

export const Items = () => {
    const matches = useMediaQuery('(min-width:700px)');
    const dispatch = useAppDispatch()
    const { collectionId } = useParams()
    const [modal, setModal] = useState<boolean>(false)
    const { items, isLoading } = useAppSelector(state => state.itemsReducer)

    useEffect(() => {
        dispatch(fetchItems(Number(collectionId)))
    }, [])

    return (
        <Grid container sx={{ pt: 2 }} direction='column'>
            <Grid item container>
                <Typography sx={{ fontWeight: 700 }} variant='h6'>
                    <FormattedMessage id="app.user-page.body.items" />
                </Typography>
                <SettingsBar modal={modal} setModal={setModal} />
            </Grid>
            <CreateItem modal={modal} setModal={setModal} />
            {isLoading ? <Grid
                container
                padding={20}
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            ><CircularProgress /></Grid> :
                <Grid
                    item
                    container
                    direction='row'
                    justifyContent={matches ? 'start' : 'center'}
                    gap={5}
                    flexWrap='wrap'
                    sx={{ mt: 2, mb: 2 }}>
                    {items.map(i => (
                        <ItemCard key={i.id} item={i} />
                    ))}
                </Grid>
            }
        </Grid>
    )
}