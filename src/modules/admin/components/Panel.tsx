import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import { FormattedMessage } from "react-intl";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { fetchUsers, userBlock } from '../store/actions';
import { BlockPanel } from './BlockPanel';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 160 },
    { field: 'isActive', headerName: 'Active', width: 160 },
    { field: 'email', headerName: 'email', type: 'number', width: 200 },
    {
        field: 'createdAt', headerName: 'CreatedAt', width: 160,
        valueFormatter(params) {
            return moment(params.value).format('MMMM Do YYYY')
        },
    },
];

export const Panel = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [modalBlock, setModalBlock] = useState<boolean>(false)
    const { users } = useAppSelector(state => state.usersReducer)
    const handleEvent: GridEventListener<'rowClick'> = (
        params
    ) => {
        navigate(`/user/${params.row.id}`);
    };

    const blockUser = (e: React.MouseEvent) => {
        e.preventDefault()
        setModalBlock(true)
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <Grid container direction='column' gap={2} sx={{ minHeight: 380, width: '100%', mt: 10 }}>
            <Grid container item direction='row' justifyContent='space-between'>
                <Typography sx={{ fontWeight: 700 }} variant='h4'>
                    <FormattedMessage id="app.admin-page.header.users" />
                </Typography>
                <Button onClick={blockUser}>
                <FormattedMessage id="app.administration-user.header" />
                </Button>
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