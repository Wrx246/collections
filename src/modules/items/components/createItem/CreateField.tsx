import React from 'react'
import { TextField } from '@mui/material'
import { FormattedMessage } from "react-intl"

interface FieldTypes {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    label?: string,
    type: string,
    fieldId: string
}

export const CreateField = ({value, setValue, label, type, fieldId}: FieldTypes) => {
    return (
        <TextField
            fullWidth
            id={fieldId}
            label={label && <FormattedMessage id={label} />}
            color='primary'
            variant="outlined"
            type={type}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
    )
}