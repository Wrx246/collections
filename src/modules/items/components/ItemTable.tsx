import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import { ItemType } from '../models/itemTypes';

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 160 },
    { field: 'tags', headerName: 'Tags', width: 160 },
    { field: 'likes', headerName: 'likes', type: 'number', width: 90 },
    {
        field: 'createdAt', headerName: 'CreatedAt', width: 160,
        valueFormatter(params) {
            return moment(params.value).format('MMMM Do YYYY')
        },
    },
    { field: 'score', headerName: 'score', type: 'number', width: 90 },
    { field: 'country', headerName: 'country', type: 'string', width: 90 },
    { field: 'reward', headerName: 'reward', type: 'number', width: 90 },
];

type CardType = {
    items: ItemType[]
}

export const ItemTable = ({ items }: CardType) => {
    const navigate = useNavigate()
    const handleEvent: GridEventListener<'rowClick'> = (
        params
    ) => {
        navigate(`/item/${params.row.id}`);
    };

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