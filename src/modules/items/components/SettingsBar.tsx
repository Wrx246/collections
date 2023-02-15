import React from 'react'
import { Button, useMediaQuery, Grid } from "@mui/material";
import { FormattedMessage } from "react-intl";
import BackButton from '../../../shared/components/BackButton';
import { Popup } from './Popup';


type SettingsType = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>
    modalDelete: boolean
}

export const SettingsBar = ({ modal, setModal, modalDelete, setModalDelete }: SettingsType) => {
    const matches = useMediaQuery('(max-width:700px)');


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
                </Grid>
                <Grid item>
                    <Popup handleCreate={handleCreate} handleDelete={handleDelete} />
                </Grid>
            </>
                :
                <>
                    <Grid item>
                        <BackButton />
                    </Grid>
                    <Grid item>
                        <Button sx={{ marginX: 2 }} color='primary' variant='contained' onClick={handleCreate}>
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