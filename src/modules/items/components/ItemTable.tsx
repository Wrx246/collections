import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/ru'
import { useIntl } from "react-intl";
import { ItemType } from '../models/itemTypes';

type CardType = {
    items: ItemType[]
}

export const ItemTable = ({ items }: CardType) => {
    const navigate = useNavigate()
    const intl = useIntl()
    const item = Object.entries(!!items[0]).filter(([key, value]) => value !== null).map(i => i[0])
    const handleEvent: GridEventListener<'rowClick'> = (
        params
    ) => {
        navigate(`/item/${params.row.id}`);
    };

    const columns: GridColDef[] = [
        { field: 'title', headerName: intl.formatMessage({ id: "app.create.title" }), width: 160 },
        { field: 'tags', headerName: intl.formatMessage({ id: "app.create.tag" }), width: 160 },
        {
            field: 'likes',
            headerName: intl.formatMessage({ id: "app.user-page.body.sort-likes" }),
            type: 'number',
            width: 90,
            valueFormatter(params) {
                return params.value.length
            },
        },
        {
            field: 'createdAt',
            headerName: intl.formatMessage({ id: "app.item-card.body.created" }),
            width: 160,
            valueFormatter(params) {
                moment.locale(localStorage.getItem('app.locale') || '')
                return moment(params.value).format('MMMM Do YYYY')
            },
        },
        {
            field: 'author',
            headerName: intl.formatMessage({ id: "app.checkbox.author" }),
            type: 'string',
            width: 90, 
            hide: item.includes('author'),
        },
        {
            field: 'language',
            headerName: intl.formatMessage({ id: "app.checkbox.language" }),
            type: 'string',
            width: 90, 
            hide: item.includes('language'),
        },
        {
            field: 'shortName',
            headerName: intl.formatMessage({ id: "app.checkbox.shortName" }),
            type: 'string',
            width: 90, 
            hide: item.includes('shortName'),
        },
        {
            field: 'comment',
            headerName: intl.formatMessage({ id: "app.checkbox.comment" }),
            type: 'string',
            width: 90, 
            hide: item.includes('comment'),
        },
        {
            field: 'additionalInfo',
            headerName: intl.formatMessage({ id: "app.checkbox.additionalInfo" }),
            type: 'string',
            width: 90, 
            hide: item.includes('additionalInfo'),
        },
        {
            field: 'country',
            headerName: intl.formatMessage({ id: "app.checkbox.country" }),
            type: 'string',
            width: 90,
            hide: item.includes('country'),
        },
        {
            field: 'price',
            headerName: intl.formatMessage({ id: "app.checkbox.price" }),
            type: 'number',
            width: 90,
            hide: item.includes('price'),
        },
        {
            field: 'score',
            headerName: intl.formatMessage({ id: "app.checkbox.score" }),
            type: 'number',
            width: 90, 
            hide: item.includes('score'),
        },
        {
            field: 'reward',
            headerName: intl.formatMessage({ id: "app.checkbox.reward" }),
            type: 'number',
            width: 90,
            hide: item.includes('reward'),
        },
    ];

    return (
        <div style={{ minHeight: 380, width: '100%' }}>
            <DataGrid
                rows={items}
                onRowClick={handleEvent}
                sx={{ ":hover": { cursor: 'pointer' } }}
                columns={columns}
                autoPageSize
            />
        </div>
    )
}