import React, { useState } from 'react'
import { Button, TextField, Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import BackButton from '../../../shared/components/BackButton';


type SettingsType = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
}

export const SettingsBar = ({ modal, setModal }: SettingsType) => {

    const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setModal(!modal)
      }

    return (
        <Grid container justifyContent='space-between' sx={{ pt: 3, pl: 3}}>
            <Grid item>
                <BackButton />
                <Typography sx={{ ml: 3 }} component='span'>10 items</Typography>
                <FormControl  sx={{ ml: 3 }}>
                    <InputLabel id="select-sort">Sort by</InputLabel>
                    <Select
                        sx={{ maxHeight: 35 }}
                        labelId="select-label"
                        id="select"
                        defaultValue="Date added"
                        label="Sort by">
                        <MenuItem value='Date added'>Date added</MenuItem>
                        <MenuItem value='Likes'>Likes</MenuItem>
                        <MenuItem value='Comments'>Comments</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Button color='primary' variant='contained' onClick={handleCreate}>Add item</Button>
            </Grid>
        </Grid>
    )
}