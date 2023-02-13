import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Grid, CircularProgress, Paper } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { Comment } from './Comment'
import { CommentInput } from './CommentInput'
import { fetchComments } from '../store/actions'
import { commentsSlice } from '../store/slice'


export const Comments = () => {
    const { comments, isLoading } = useAppSelector(state => state.commentsReducer)
    const { itemId } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const interval = setInterval(() => dispatch(fetchComments(Number(itemId))), 3000);
        return () => {
            clearInterval(interval)
            dispatch(commentsSlice.actions.commentsFetchingSuccess([]))
        }
    }, [itemId])

    return (
        <Grid container direction='column' gap={3} sx={{ width: '100%', pt: 2, mb: 2 }}>
            <Grid item>
                <CommentInput />
            </Grid>
            <Grid item>
                <Typography variant='h5'>
                    <FormattedMessage id="app.item-card.comment" />
                </Typography>
                {isLoading && !comments ? <Grid
                    container
                    padding={20}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                ><CircularProgress /></Grid> :
                    <Paper style={{ padding: "20px 20px" }}>
                        {comments?.map(c => (
                            <Comment key={Number(c.id)} comment={c} />
                        ))}
                    </Paper>
                }
            </Grid>
        </Grid>
    )
}