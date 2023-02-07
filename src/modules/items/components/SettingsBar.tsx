import React, { useState } from 'react'
import { Button, TextField, Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormattedMessage } from "react-intl";
import BackButton from '../../../shared/components/BackButton';
import { useAppSelector } from '../../../shared/hooks/redux';


type SettingsType = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
}

export const SettingsBar = ({ modal, setModal }: SettingsType) => {
    const items = useAppSelector(state => state.itemsReducer.items)

    const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setModal(!modal)
    }

    return (
        <Grid container justifyContent='space-between' sx={{ pt: 3, pl: 3 }}>
            <Grid item>
                <BackButton />
                <Typography sx={{ ml: 3 }} component='span'>
                    {items.length} <FormattedMessage id="app.user-page.body.count" />
                </Typography>
                <FormControl sx={{ ml: 3 }}>
                    <InputLabel id="select-sort">
                        <FormattedMessage id="app.user-page.body.sort" />
                    </InputLabel>
                    <Select
                        sx={{ maxHeight: 35, minWidth: 120 }}
                        labelId="select-label"
                        id="select"
                        defaultValue="Date added"
                        label={<FormattedMessage id="app.user-page.body.sort" />}>
                        <MenuItem value='Date added'>
                            <FormattedMessage id="app.user-page.body.sort-date" />
                        </MenuItem>
                        <MenuItem value='Likes'>
                            <FormattedMessage id="app.user-page.body.sort-likes" />
                        </MenuItem>
                        <MenuItem value='Comments'>
                            <FormattedMessage id="app.user-page.body.sort-comments" />
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Button color='primary' variant='contained' onClick={handleCreate}>
                    <FormattedMessage id="app.user-page.body.add" />
                </Button>
            </Grid>
        </Grid>
    )
}