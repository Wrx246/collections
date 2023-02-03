import React, { useState } from 'react'
import { FormattedMessage } from "react-intl";
import { TextField } from '@mui/material'

export const Search = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <TextField
            id="standard-basic-search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            label={<FormattedMessage id="app.header.search" />}
            type='text'
            variant="standard"
        />
    )
}