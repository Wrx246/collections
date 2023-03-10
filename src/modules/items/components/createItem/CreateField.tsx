import { TextField } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { CollectionType } from '../../../collections/models/collection'

type FormData = {
    title: string;
    description: string;
    theme: string;
    author?: string;
    comment?: string;
    additionalInfo?: string;
    publication?: string;
    foundation?: string;
    price?: number;
    reward?: number;
    score?: number;
    favorite?: boolean;
    country?: string;
    language?: string;
    shortName?: string;
    status?: boolean;
    terminated?: string;
    original?: boolean;
};
interface FieldTypes {
    collections: CollectionType,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

export const CreateField = ({ collections, register, errors }: FieldTypes) => {

    return (
        <>
            {collections.author && <TextField
                fullWidth
                id='outlined-author-item'
                label={<FormattedMessage id="app.checkbox.author" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.author}
                {...register("author", { required: "Required field!" })}
                helperText={errors?.author?.message} />}
            {collections.comment && <TextField
                fullWidth
                id='outlined-comment-item'
                label={<FormattedMessage id="app.checkbox.comment" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.comment}
                {...register("comment", { required: "Required field!" })}
                helperText={errors?.comment?.message} />}
            {collections.additionalInfo && <TextField
                fullWidth
                id='outlined-additionalInfo-item'
                label={<FormattedMessage id="app.checkbox.additionalInfo" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.additionalInfo}
                {...register("additionalInfo", { required: "Required field!" })}
                helperText={errors?.additionalInfo?.message} />}
            {collections.publication && <TextField
                fullWidth
                id='outlined-publication-item'
                label={<FormattedMessage id="app.checkbox.publication" />}
                color='primary'
                focused
                variant="outlined"
                type='date'
                error={!!errors?.publication}
                {...register("publication", { required: "Required field!" })}
                helperText={errors?.publication?.message} />}
            {collections.foundation && <TextField
                fullWidth
                id='outlined-foundation-item'
                label={<FormattedMessage id="app.checkbox.foundation" />}
                color='primary'
                focused
                variant="outlined"
                type='date'
                error={!!errors?.foundation}
                {...register("foundation", { required: "Required field!" })}
                helperText={errors?.foundation?.message} />}
            {collections.terminated && <TextField
                fullWidth
                id='outlined-terminated-item'
                label={<FormattedMessage id="app.checkbox.terminated" />}
                color='primary'
                focused
                variant="outlined"
                type='date'
                error={!!errors?.terminated}
                {...register("terminated", { required: "Required field!" })}
                helperText={errors?.terminated?.message} />}
            {collections.price && <TextField
                fullWidth
                id='outlined-price-item'
                label={<FormattedMessage id="app.checkbox.price" />}
                color='primary'
                variant="outlined"
                type='number'
                error={!!errors?.price}
                {...register("price", { required: "Required field!" })}
                helperText={errors?.price?.message} />}
            {collections.reward && <TextField
                fullWidth
                id='outlined-reward-item'
                label={<FormattedMessage id="app.checkbox.reward" />}
                color='primary'
                variant="outlined"
                type='number'
                error={!!errors?.reward}
                {...register("reward", { required: "Required field!" })}
                helperText={errors?.reward?.message} />}
            {collections.score && <TextField
                fullWidth
                id='outlined-score-item'
                label={<FormattedMessage id="app.checkbox.score" />}
                color='primary'
                variant="outlined"
                type='number'
                error={!!errors?.score}
                {...register("score", { required: "Required field!" })}
                helperText={errors?.score?.message} />}
            {collections.country && <TextField
                fullWidth
                id='outlined-country-item'
                label={<FormattedMessage id="app.checkbox.country" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.country}
                {...register("country", { required: "Required field!" })}
                helperText={errors?.country?.message} />}
            {collections.language && <TextField
                fullWidth
                id='outlined-language-item'
                label={<FormattedMessage id="app.checkbox.language" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.language}
                {...register("language", { required: "Required field!" })}
                helperText={errors?.language?.message} />}
            {collections.shortName && <TextField
                fullWidth
                id='outlined-shortName-item'
                label={<FormattedMessage id="app.checkbox.shortName" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.shortName}
                {...register("shortName", { required: "Required field!" })}
                helperText={errors?.shortName?.message} />}
        </>
    )
}