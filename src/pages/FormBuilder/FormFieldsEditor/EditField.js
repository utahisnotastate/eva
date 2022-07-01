import React, { useState } from 'react'
import {Box, Typography, MenuItem, InputLabel, FormControl} from "@mui/material"
import {
    Autocomplete,
    TextField,
    Select,
    Switch,
    ToggleButtonGroup,
} from 'formik-mui';
import { Formik, Form, Field, FieldArray } from 'formik';


export default function EditField({name, type}) {
    return (
        <div style={{display: "flex", flexDirection:"column", margin: "5px"}}>
            <Typography>Type: {type}</Typography>
            <br/>
            <Field component={TextField} name={`${name}.label`} label={`Label`} placeholder={`Please enter label for field`}  InputProps={{ notched: true }} fullWidth />
            <Field component={TextField} name={`${name}.placeholder`} label={`Place Holder`} placeholder={`Please enter placeholder for field`}  InputProps={{ notched: true }} />
            <Typography>Options</Typography>
        </div>
    )
}
