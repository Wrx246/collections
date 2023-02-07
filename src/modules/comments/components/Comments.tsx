import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Grid, List, CircularProgress } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { Comment } from './Comment'
import { CommentInput } from './CommentInput'
import { fetchComments } from '../store/actions'


export const Comments = () => {
    const { comments, isLoading } = useAppSelector(state => state.commentsReducer)
    const {itemId} = useParams()
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchComments(Number(itemId)))
    },[itemId])

    return (
        <Grid container direction='column' gap={3} sx={{ width: '100%' }}>
            <Grid item>
                <CommentInput />
            </Grid>
            <Grid item>
                <Typography variant='h5'>Comments</Typography>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    {isLoading && <Grid
                        container
                        padding={20}
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    ><CircularProgress /></Grid>}
                    {comments.map(c => (
                        <Comment key={c.id} comment={c} />
                    ))}
                </List>
            </Grid>
        </Grid>
    )
}