import React, { useState } from 'react'
import { Modal, Box } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { storage } from '../../../shared/configs/firebase'

interface FileTypes {
    title: string
    id: number
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    modal: boolean
}

export const FileLoader = ({ title, id, modal, setModal }: FileTypes) => {
    const [drag, setDrag] = useState(false)

    const style = [
        {
            border: '1px dashed black',
            textAlign: 'center',
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
        }
    ]

    const dragStartHandler = (e: React.DragEvent) => {
        e.preventDefault()
        setDrag(true)
    }

    const handleClose = () => setModal(false);

    const dragLeaveHandler = (e: React.DragEvent) => {
        e.preventDefault()
        setDrag(false)
    }

    const dropHandler = (e: React.DragEvent) => {
        e.preventDefault()
        let file = e.dataTransfer.files
        if (file === null) return
        const imageRef = ref(storage, `collections/${title + id}`)
        uploadBytes(imageRef, file[0])
        setDrag(false)
        setModal(false)
    }

    return (
        <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {drag ? <div
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => dropHandler(e)}
                >
                    <FormattedMessage id="app.create.image-drop" />
                </div>
                    : <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >
                        <FormattedMessage id="app.create.image-drag" />
                    </div>}
            </Box>
        </Modal>
    )
}