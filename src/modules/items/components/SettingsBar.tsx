import React, { useState } from 'react'
import { Button, useMediaQuery, Grid, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormattedMessage } from "react-intl";
import BackButton from '../../../shared/components/BackButton';
import { useAppSelector } from '../../../shared/hooks/redux';
import { Popup } from './Popup';


type SettingsType = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>
    modalDelete: boolean
}

export const SettingsBar = ({ modal, setModal, modalDelete, setModalDelete }: SettingsType) => {
    const matches = useMediaQuery('(max-width:700px)');
    const items = useAppSelector(state => state.itemsReducer.items)
    const [sort, setSort] = useState<string>("Date added")

    const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setModal(!modal)
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setModalDelete(!modalDelete)
    }

    return (
        <Grid container justifyContent='space-between' sx={{ pt: 3, pl: 3 }}>
            {matches ? <>
                <Grid item>
                    <BackButton />
                    <Typography sx={{ ml: 3 }} component='span'>
                        {items.length} <FormattedMessage id="app.user-page.body.count" />
                    </Typography>
                </Grid>
                <Grid item>
                    <Popup handleCreate={handleCreate} handleDelete={handleDelete} />
                </Grid>
            </>
                :
                <>
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
                                value={sort}
                                onChange={(e: SelectChangeEvent) => setSort(e.target.value)}
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
                        <Button sx={{marginX: 2}} color='primary' variant='contained' onClick={handleCreate}>
                            <FormattedMessage id="app.user-page.body.add" />
                        </Button>
                        <Button color='primary' variant='contained' onClick={handleDelete}>
                            <FormattedMessage id="app.user-page.body.delete" />
                        </Button>
                    </Grid>
                </>
            }
        </Grid>
    )
}