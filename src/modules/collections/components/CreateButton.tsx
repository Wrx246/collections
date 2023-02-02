import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

type CreateType = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  modal: boolean
}

export const CreateButton = ({ setModal, modal }: CreateType) => {

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setModal(!modal)
  }

  return (
    <Fab color="primary" sx={{ maxWidth: 35, maxHeight: 15 }} aria-label="add" onClick={handleCreate}>
      <AddIcon />
    </Fab>
  )
}