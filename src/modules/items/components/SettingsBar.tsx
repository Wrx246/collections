import React, { useState } from 'react'
import { Button, TextField, Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const SettingsBar = () => {
    // const [sort, setSort] = useState<string>()

    return (
        <Grid container justifyContent='space-between' sx={{ pt: 3, pl: 3}}>
            <Grid item gap={2}>
                <Typography component='span'>10 items</Typography>
                <FormControl>
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
                <Button color='primary' variant='contained'>Add item</Button>
            </Grid>
        </Grid>
    )
}