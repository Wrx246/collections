import { Divider, Typography, Grid } from '@mui/material'
import { FormattedMessage } from "react-intl"
import moment from 'moment'
import { CommentType } from '../models/commentTypes'

type CommentTypes = {
    comment: CommentType
}

export const Comment = ({ comment }: CommentTypes) => {
    let date = moment(comment.createdAt).format('MMMM Do YYYY hh:mm')
    return (
        <>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography variant='h4' style={{ margin: 0, textAlign: "left", fontSize: 20, fontWeight: 500 }}>
                        {comment.author}
                    </Typography>
                    <Typography component='p' sx={{ textAlign: "left" }}>{comment.text}</Typography>
                    <Typography component='p' sx={{ textAlign: "left", color: "gray", fontSize: 14 }}>
                        <FormattedMessage id="app.item-card.comment-posted" /> {date}
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" sx={{ margin: "10px 0px" }} />
        </>
    )
}