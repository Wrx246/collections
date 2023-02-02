import { Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchCollections } from '../store/actions'
import { CollectionFolder } from './CollectionFolder'
import { CreateButton } from './CreateButton'
import { CreateCollection } from './CreateCollection'

export const Collections = () => {
    const collections = useAppSelector(state => state.collectionsReducer.collections)
    const dispatch = useAppDispatch()
    const [modal, setModal] = useState<boolean>(false)


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-data') || 'false')
        dispatch(fetchCollections(user.id))
    }, [])

    return (
        <Grid container direction='column'>
            <Grid item container direction='row' justifyContent='space-between'>
                <Typography sx={{ fontWeight: 700 }} variant='h6'>Collections</Typography>
                <CreateButton setModal={setModal} modal={modal} />
            </Grid>
            <CreateCollection modal={modal} setModal={setModal} />
            <Grid item container direction='column' sx={{ mt: 2 }}>
                {collections.map(c => (
                    <CollectionFolder key={c.id} name={c.title} />
                ))}
            </Grid>
        </Grid>
    )
}