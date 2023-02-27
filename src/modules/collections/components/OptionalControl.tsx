import {
    FormControl,
    Checkbox,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    ListItemText,
    SelectChangeEvent
} from '@mui/material'
import { FormattedMessage } from "react-intl"

interface OptionalTypes {
    checkControl: string[]
    handleChange: (event: SelectChangeEvent<string[]>) => void
    controls: string[]
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const OptionalControl = ({ checkControl, handleChange, controls }: OptionalTypes) => {

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">
                <FormattedMessage id='app.checkbox.optional' />
            </InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={checkControl}
                onChange={handleChange}
                input={<OutlinedInput label={<FormattedMessage id='app.checkbox.optional' />} />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {controls.map((controls) => (
                    <MenuItem key={controls} value={controls}>
                        <Checkbox checked={checkControl.indexOf(controls) > -1} />
                        <ListItemText primary={<FormattedMessage id={`app.checkbox.${controls}`} />} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}