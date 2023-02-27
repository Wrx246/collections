import { useState } from 'react'
import { useEffect } from 'react'
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useParams } from 'react-router-dom';
import { SettingsBar } from "./SettingsBar";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { fetchItems } from '../store/actions';
import { CreateItem } from './createItem/CreateItem';
import { DeleteItem } from './deleteItem/DeleteItem';
import { ItemTable } from './ItemTable';
import Preloader from '../../../shared/components/Preloader';
import BackButton from '../../../shared/components/BackButton';
import { EditItem } from './editItem/EditItem';
import { EditSelect } from './editItem/EditSelect';

export const Items = () => {
    const matches = useMediaQuery('(min-width:700px)');
    const dispatch = useAppDispatch()
    const { collectionId } = useParams()
    const [modal, setModal] = useState<boolean>(false)
    const [settings, setSettings] = useState<boolean>(false)
    const [modalDelete, setModalDelete] = useState<boolean>(false)
    const [modalEdit, setModalEdit] = useState<boolean>(false)
    const [editId, setEditId] = useState<number>(0)
    const [selectEdit, setSelectEdit] = useState<boolean>(false)
    const { items, isLoading } = useAppSelector(state => state.itemsReducer)

    useEffect(() => {
        dispatch(fetchItems(Number(collectionId)))
    }, [])

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user-data') || 'false')
        let id = JSON.parse(localStorage.getItem('collection-settings') || 'false')
        if (user.id === id || user.role === 'admin') {
            setSettings(true)
        } else {
            setSettings(false)
        }
    }, [])

    const handleSettings = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        setEditId(id)
        setModalEdit(true)
        setSelectEdit(false)
    }

    return (
        <Grid container sx={{ pt: 2 }} direction='column'>
            <Grid item container direction='column'>
                <Typography sx={{ fontWeight: 700 }} variant='h6'>
                    <FormattedMessage id="app.user-page.body.items" />
                </Typography>
                {settings ?
                    <SettingsBar
                        selectEdit={selectEdit}
                        setSelectEdit={setSelectEdit}
                        modal={modal}
                        setModal={setModal}
                        modalDelete={modalDelete}
                        setModalDelete={setModalDelete} />
                    : <BackButton />
                }
            </Grid>
            <CreateItem modal={modal} setModal={setModal} />
            <DeleteItem modalDelete={modalDelete} setModalDelete={setModalDelete} />
            <EditItem
                editId={editId}
                modalEdit={modalEdit}
                setModalEdit={setModalEdit} />
            <EditSelect
                handleSettings={handleSettings}
                selectEdit={selectEdit}
                setSelectEdit={setSelectEdit} />
            {isLoading ? <Preloader /> :
                <Grid
                    item
                    container
                    direction='row'
                    justifyContent={matches ? 'start' : 'center'}
                    gap={5}
                    flexWrap='wrap'
                    sx={{ mt: 2, mb: 2 }}>
                    <ItemTable items={items} />
                </Grid>
            }
        </Grid>
    )
}