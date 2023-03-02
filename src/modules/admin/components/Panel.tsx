import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import { FormattedMessage, useIntl } from "react-intl";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { fetchUsers } from '../store/actions';
import { BlockPanel } from './BlockPanel';

export const Panel = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const intl = useIntl()
    const [modalBlock, setModalBlock] = useState<boolean>(false)
    const { users } = useAppSelector(state => state.usersReducer)
    const user = JSON.parse(localStorage.getItem('user-data') || 'false')
    const handleEvent: GridEventListener<'rowClick'> = (
        params
    ) => {
        navigate(`/user/${params.row.id}`);
    };

    const blockUser = (e: React.MouseEvent) => {
        e.preventDefault()
        setModalBlock(true)
    }

    const handleCollection = () => {
        if (user !== 'false') {
            navigate(`/user/${user.id}`)
        }
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: intl.formatMessage({ id: "app.admin-panel.name" }),
            width: 160
        },
        {
            field: 'isActive',
            headerName: intl.formatMessage({ id: "app.admin-panel.active" }),
            width: 160
        },
        {
            field: 'email',
            headerName: intl.formatMessage({ id: "app.admin-panel.email" }),
            type: 'number',
            width: 200
        },
        {
            field: 'createdAt', headerName: intl.formatMessage({ id: "app.admin-panel.created" }), width: 160,
            valueFormatter(params) {
                moment.locale(localStorage.getItem('app.locale') || '')
                return moment(params.value).format('MMMM Do YYYY')
            },
        },
    ];

    return (
        <Grid container direction='column' gap={2} sx={{ minHeight: 380, width: '100%', mt: 10 }}>
            <Grid container item direction='row' justifyContent='space-between'>
                <Typography sx={{ fontWeight: 700 }} variant='h4'>
                    <FormattedMessage id="app.admin-page.header.users" />
                </Typography>
                <Grid item>
                    {user.name !== 'admin' && <Button onClick={handleCollection}>
                        <FormattedMessage id="app.administration-collection.header" />
                    </Button>}
                    <Button onClick={blockUser}>
                        <FormattedMessage id="app.administration-user.header" />
                    </Button>
                </Grid>
            </Grid>
            <BlockPanel modalBlock={modalBlock} setModalBlock={setModalBlock} />
            <DataGrid
                rows={users}
                onRowClick={handleEvent}
                sx={{ ":hover": { cursor: 'pointer' } }}
                columns={columns}
                autoPageSize
            />
        </Grid>
    )
}