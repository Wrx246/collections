import { Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { FormattedMessage } from "react-intl";
import Preloader from '../../../shared/components/Preloader';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchCollections } from '../store/actions'
import { CollectionCard } from './CollectionCard';
import { CreateButton } from './CreateButton'
import { CreateCollection } from './CreateCollection'

export const Collections = () => {
    const { collections, isLoading } = useAppSelector(state => state.collectionsReducer)
    const dispatch = useAppDispatch()
    const [modal, setModal] = useState<boolean>(false)


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-data') || 'false')
        if (user !== 'false') {
            dispatch(fetchCollections(user.id))
        }
    }, [])



    return (
        <Grid container direction='column' sx={{ pt: 2 }}>
            <Grid item container direction='row' justifyContent='space-between'>
                <Typography sx={{ fontWeight: 700 }} variant='h6'>
                    <FormattedMessage id="app.user-page.body.collections" />
                </Typography>
                <CreateButton setModal={setModal} modal={modal} />
            </Grid>
            <CreateCollection modal={modal} setModal={setModal} />
            {isLoading ? <Preloader />
                : <Grid item container direction='row' gap={2} sx={{ mt: 2 }}>
                    {collections.map(c => (
                        <CollectionCard key={c.id} collection={c} />
                    ))}
                </Grid>
            }
        </Grid>
    )
}