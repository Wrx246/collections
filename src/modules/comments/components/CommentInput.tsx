import React, { useState } from 'react'
import { TextField, Button, Grid, Typography } from '@mui/material'
import { useAppDispatch } from '../../../shared/hooks/redux'
import { fetchCreateComment } from '../store/actions'
import { useParams } from 'react-router-dom'



export const CommentInput = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()
    const {itemId} = useParams() 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    let user = JSON.parse(localStorage.getItem('user-data') || '')

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
                Write comment
            </Typography>
            <TextField
                id="outlined-text-comment"
                label="Write comment"
                color='primary'
                variant="outlined"
                type='text'
                disabled={!user}
                value={text}
                onChange={handleChange} />
            <Button color='primary' variant='contained' disabled={!user} onClick={handleSubmit}>Submit</Button>
        </Grid>
    )
}