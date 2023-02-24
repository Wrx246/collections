import React from 'react'
import { TextField } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface FieldTypes {
    type: string,
    label: string,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

export const CreateField = ({ label, type, register, errors }: FieldTypes) => {
    return (
        <></>
        // <TextField
        //     fullWidth
        //     id={`outlined-${label}-item`}
        //     label={<FormattedMessage id={`app.create.${label}`} />}
        //     color='primary'
        //     variant="outlined"
        //     type={type}
        //     error={!!errors?.label}
        //     {...register(label, { required: "Required field!" })}
        //     helperText={errors?.label?.message} />
    )
}