import React, { useState } from 'react'
import {Box, Typography, Grid, Button} from "@mui/material"
import {
    TextField,
} from 'formik-mui';
import EVAFieldArray from "../../../components/inputs/EVAFieldArray";
import { Formik, Form, Field, FieldArray } from 'formik';


export default function EditField({name, type, options}) {
    return (
        <div style={{flexGrow: 1, padding: "10px"}}>
        <div style={{display: "flex", flexDirection:"column", gap: "5px"}}>
            <Field component={TextField} style={{marginBottom: "10px"}} name={`${name}.label`} InputLabelProps={{ shrink: true }} label={`Label`} placeholder={`Please enter label for field`}  InputProps={{ notched: true }} fullWidth />
            <Field component={TextField} name={`${name}.placeholder`} InputLabelProps={{ shrink: true }} label={`Place Holder`} placeholder={`Please enter placeholder for field`}  InputProps={{ notched: true }} fullWidth />
            {type === "text" ? null: (
                <Typography>Edit choices here</Typography>
            )}
            </div>
        </div>

    )
}
