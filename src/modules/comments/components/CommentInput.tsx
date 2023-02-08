import React, { useState } from 'react'
import { TextField, Button, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from "react-intl"
import { useAppDispatch } from '../../../shared/hooks/redux'
import { fetchCreateComment } from '../store/actions'



export const CommentInput = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()
    const { itemId } = useParams()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    let user = JSON.parse(JSON.stringify(localStorage.getItem('user-data')))

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(fetchCreateComment({
            text: text,
            author: user.name,
            itemId: Number(itemId)
        }));
        setText('');
    };
    return (
        <Grid
            container
            alignItems='start'
            justifyContent='center'
            direction='column'
            gap={1}>
            <Typography variant='h5'>
                <FormattedMessage id="app.item-card.comment-write" />
            </Typography>
            <TextField
                id="outlined-text-comment"
                label={<FormattedMessage id="app.item-card.comment-write" />}
                color='primary'
                variant="outlined"
                type='text'
                disabled={!user}
                value={text}
                onChange={handleChange} />
            <Button
                color='primary'
                variant='contained'
                disabled={!user}
                onClick={handleSubmit}>
                <FormattedMessage id="app.item-card.comment-submit" />
            </Button>
        </Grid>
    )
}