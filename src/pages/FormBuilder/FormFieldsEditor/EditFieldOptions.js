import React from "react"
import { Field } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from 'formik-mui';

export default function EditFieldOptions({name}) {
    return (
        <Field
            component={Select}

            name={name}
            label="Field Options"

        >
            <MenuItem value={10}>Text</MenuItem>
            <MenuItem value={20}>Number</MenuItem>
            <MenuItem value={30}>Date</MenuItem>
            <MenuItem value={30}>Range</MenuItem>
        </Field>
    )
}
