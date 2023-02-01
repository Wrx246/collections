import React, { useState, useEffect } from 'react'
import { Switch } from '@mui/material';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { themeChanger } from '../store/theme-actions';

export const SwitchWidget = () => {
    const [checked, setChecked] = useState<boolean>(JSON.parse(localStorage.getItem('collection-theme') || 'false'))

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(themeChanger(checked))
    }, [checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked);
    }
    return (
        <>
            <Switch checked={checked} onChange={handleChange} color="primary" />
        </>
    )
}