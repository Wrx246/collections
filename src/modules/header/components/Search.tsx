import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { TextField } from '@mui/material'
import { useDebounce } from '../helpers/useDebounce';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { fetchSearch } from '../store/actions';
import { searchPath } from '../../../shared/constants/Paths';
import { tagsSlice } from '../../tags';

export const Search = () => {
    const [search, setSearch] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const fetchingSearch = () => {
        dispatch(fetchSearch(search))
    }

    const debouncedSearch = useDebounce(fetchingSearch, 500)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        debouncedSearch(e.target.value)
        navigate(searchPath)
        dispatch(tagsSlice.actions.searchFetchingSuccess([]))
    }

    return (
        <TextField
            id="standard-basic-search"
            value={search}
            onChange={onChange}
            label={<FormattedMessage id="app.header.search" />}
            type='text'
            variant="standard"
        />
    )
}