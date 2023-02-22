import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chip, Stack } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { fetchSearchTags, fetchTags } from '../store/actions'
import { searchPath } from '../../../shared/constants/Paths'

export const Tags = () => {
    const { tags } = useAppSelector(state => state.tagsReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchTags())
    }, [])

    const handleSearchTag = (t: string) => {
        dispatch(fetchSearchTags(t))
        navigate(searchPath)
    }

    return (
        <Stack direction="row" spacing={5} sx={{ mt: 2, mb: 2 }}>
            {tags.map(t => (
                <Chip
                    sx={{ fontSize: 20, p: 3 }}
                    key={t}
                    label={t}
                    variant="outlined"
                    color='primary'
                    onClick={() => handleSearchTag(t)} />
            ))}
        </Stack>
    )
}