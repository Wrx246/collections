import { useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Grid, Typography } from '@mui/material';

type FolderType = {
    name: string,
}

export const CollectionFolder = ({ name }: FolderType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const style = [
        {
            '&:hover': {
                backgroundColor: '#6954D6',
                cursor: 'pointer',
                fontWeight: 700
            }
        },
        {
            pt: 2,
            pl: 2,
            backgroundColor: isOpen ? '#6954D6' : 'transparent'
        }
    ]

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Grid container
            sx={style}
            gap={1}
            direction="row"
            alignItems="start"
            justifyContent="start"
            onClick={handleOpen}>
            <Grid item alignItems='center'>
                {isOpen ? <FolderOpenIcon /> : <FolderIcon />}
            </Grid>
            <Typography component='span'>{name}</Typography>
        </Grid>
    )
}