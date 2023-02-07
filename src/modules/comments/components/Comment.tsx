import { ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@mui/material'
import { CommentType } from '../models/commentTypes'

type CommentTypes = {
    comment: CommentType
}

export const Comment = ({comment}: CommentTypes) => {
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={comment.text} secondary={comment.author} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}