import { TextField } from '@mui/material'
import { FormattedMessage } from "react-intl"
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import moment from 'moment'
import { ItemType } from '../../models/itemTypes';

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
    items: ItemType,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

export const EditField = ({ items, register, errors }: FieldTypes) => {
    moment.locale(localStorage.getItem('app.locale') || '')

    return (
        <>
            {items.author && <TextField
                fullWidth
                id='outlined-author-item'
                label={<FormattedMessage id="app.checkbox.author" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.author}
                defaultValue={items?.author}
                {...register("author", { required: "Required field!" })}
                helperText={errors?.author?.message} />}
            {items.comment && <TextField
                fullWidth
                id='outlined-comment-item'
                label={<FormattedMessage id="app.checkbox.comment" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.comment}
                defaultValue={items?.comment}
                {...register("comment", { required: "Required field!" })}
                helperText={errors?.comment?.message} />}
            {items.additionalInfo && <TextField
                fullWidth
                id='outlined-additionalInfo-item'
                label={<FormattedMessage id="app.checkbox.additionalInfo" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.additionalInfo}
                defaultValue={items?.additionalInfo}
                {...register("additionalInfo", { required: "Required field!" })}
                helperText={errors?.additionalInfo?.message} />}
            {items.publication && <TextField
                fullWidth
                id='outlined-publication-item'
                label={<FormattedMessage id="app.checkbox.publication" />}
                color='primary'
                variant="outlined"
                type='date'
                error={!!errors?.publication}
                defaultValue={moment(items?.publication).format('yyyy-MM-dd')}
                {...register("publication", { required: "Required field!" })}
                helperText={errors?.publication?.message} />}
            {items.foundation && <TextField
                fullWidth
                id='outlined-foundation-item'
                label={<FormattedMessage id="app.checkbox.foundation" />}
                color='primary'
                variant="outlined"
                type='date'
                error={!!errors?.foundation}
                defaultValue={items?.foundation}
                {...register("foundation", { required: "Required field!" })}
                helperText={errors?.foundation?.message} />}
            {items.terminated && <TextField
                fullWidth
                id='outlined-terminated-item'
                label={<FormattedMessage id="app.checkbox.terminated" />}
                color='primary'
                variant="outlined"
                type='date'
                error={!!errors?.terminated}
                defaultValue={items?.terminated}
                {...register("terminated", { required: "Required field!" })}
                helperText={errors?.terminated?.message} />}
            {items.price && <TextField
                fullWidth
                id='outlined-price-item'
                label={<FormattedMessage id="app.checkbox.price" />}
                color='primary'
                variant="outlined"
                type='number'
                error={!!errors?.price}
                defaultValue={items?.price}
                {...register("price", { required: "Required field!" })}
                helperText={errors?.price?.message} />}
            {items.reward && <TextField
                fullWidth
                id='outlined-reward-item'
                label={<FormattedMessage id="app.checkbox.reward" />}
                color='primary'
                variant="outlined"
                type='number'
                error={!!errors?.reward}
                defaultValue={items?.reward}
                {...register("reward", { required: "Required field!" })}
                helperText={errors?.reward?.message} />}
            {items.score && <TextField
                fullWidth
                id='outlined-score-item'
                label={<FormattedMessage id="app.checkbox.score" />}
                color='primary'
                variant="outlined"
                type='number'
                error={!!errors?.score}
                defaultValue={items?.score}
                {...register("score", { required: "Required field!" })}
                helperText={errors?.score?.message} />}
            {items.country && <TextField
                fullWidth
                id='outlined-country-item'
                label={<FormattedMessage id="app.checkbox.country" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.country}
                defaultValue={items?.country}
                {...register("country", { required: "Required field!" })}
                helperText={errors?.country?.message} />}
            {items.language && <TextField
                fullWidth
                id='outlined-language-item'
                label={<FormattedMessage id="app.checkbox.language" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.language}
                defaultValue={items?.language}
                {...register("language", { required: "Required field!" })}
                helperText={errors?.language?.message} />}
            {items.shortName && <TextField
                fullWidth
                id='outlined-shortName-item'
                label={<FormattedMessage id="app.checkbox.shortName" />}
                color='primary'
                variant="outlined"
                type='text'
                error={!!errors?.shortName}
                defaultValue={items?.shortName}
                {...register("shortName", { required: "Required field!" })}
                helperText={errors?.shortName?.message} />}
            {items.status && <TextField
                fullWidth
                id='outlined-status-item'
                label={<FormattedMessage id="app.checkbox.status" />}
                color='primary'
                variant="outlined"
                type='checkbox'
                error={!!errors?.status}
                defaultValue={items?.status}
                {...register("status", { required: "Required field!" })}
                helperText={errors?.status?.message} />}
            {items.favorite && <TextField
                fullWidth
                id='outlined-favorite-item'
                label={<FormattedMessage id="app.checkbox.favorite" />}
                color='primary'
                variant="outlined"
                type='checkbox'
                error={!!errors?.favorite}
                defaultValue={items?.favorite}
                {...register("favorite", { required: "Required field!" })}
                helperText={errors?.favorite?.message} />}
            {items.original && <TextField
                fullWidth
                id='outlined-original-item'
                label={<FormattedMessage id="app.checkbox.original" />}
                color='primary'
                variant="outlined"
                type='checkbox'
                error={!!errors?.original}
                defaultValue={items?.original}
                {...register("original", { required: "Required field!" })}
                helperText={errors?.original?.message} />}
        </>
    )
}