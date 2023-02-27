import React, { useState } from 'react'
import { Chip, Grid, Stack, TextField, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { FormattedMessage } from "react-intl"

const style = [
    {
        '&:hover': {
            cursor: 'pointer',
        },
        '&:active': {
            backgroundColor: '#F4F8F9',
        }
    },
]

type TagsTypes = {
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export const Tags = ({ tags, setTags }: TagsTypes) => {
    const [tag, setTag] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    }

    const handleDelete = (tag: string) => {
        setTags(tags.filter(t => t !== tag))
    }

    const addTag = (e: React.MouseEvent) => {
        e.preventDefault()
        if (tag.length && !tags.includes(tag)) {
            setTags(prev => [...prev, tag])
            setTag('')
            setError(false)
        } else if (tags.includes(tag)) {
            setError(true)
        }
    }

    return (
        <Grid container gap={2}>
            <TextField
                fullWidth
                value={tag}
                onChange={handleChange}
                id="outlined-tags"
                label={<FormattedMessage id="app.create.tag" />}
                color='primary'
                variant="outlined"
                type='text'
                InputProps={{ endAdornment: <CheckIcon sx={style} onClick={addTag} /> }} />
            <Grid item>
                {error && <Typography component='span' sx={{ color: 'red' }}>
                    <FormattedMessage id="app.create.tag-added" />
                </Typography>}
            </Grid>
            <Grid item container gap={1.5} xs={12} direction='row'>
                {tags.map(t => (
                    <Stack key={t} direction="row" spacing={1}>
                        <Chip label={t} variant="outlined" onDelete={() => handleDelete(t)} />
                    </Stack>
                ))}
            </Grid>
        </Grid>
    )
}