import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { FormattedMessage } from "react-intl";
import locales from '../../../shared/constants/Locales'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { setLocale } from '../store/action';

export const LocaleSelect = () => {
    const locale = useAppSelector(state => state.localeReducer.locale)
    const dispatch = useAppDispatch()

    const handleSetLocale = (e: SelectChangeEvent<string>) => {
        dispatch(setLocale(e.target.value))
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="select-locale">
                <FormattedMessage id="app.header.locale" />
            </InputLabel>
            <Select
                sx={{ maxHeight: 35 }}
                labelId="select-locale"
                id="select"
                value={locale}
                onChange={handleSetLocale}
                defaultValue={locale}
                label={<FormattedMessage id="app.header.locale" />}>
                <MenuItem value={locales.EN}>English</MenuItem>
                <MenuItem value={locales.RU}>Русский</MenuItem>
            </Select>
        </FormControl>
    )
}