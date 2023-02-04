import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";
import React from 'react'
import { SettingsBar } from "./SettingsBar";

export const Items = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography sx={{ fontWeight: 700 }} variant='h6'>
                    <FormattedMessage id="app.user-page.body.items" />
                </Typography>
                <SettingsBar />
            </Grid>
            <Grid item container direction='column' sx={{ mt: 2 }}>
                asdf
            </Grid>
        </Grid>
    )
}