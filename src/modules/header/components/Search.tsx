import { TextField } from '@mui/material'
import React, { useState } from 'react'

export const Search = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <TextField
            id="standard-basic-search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            label="Search collections"
            type='text'
            variant="standard"
        />
    )
}