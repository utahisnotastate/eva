import React, { useState } from 'react'
import {
	TextField,
} from 'formik-mui';
import { Field} from 'formik';


export default function NumberFieldEditor({name}) {
	return (
		<div style={{flexGrow: 1, padding: "10px"}}>
			<div style={{display: "flex", flexDirection:"column", gap: "5px"}}>
				<Field component={TextField} style={{marginBottom: "10px"}} name={`${name}.label`} InputLabelProps={{ shrink: true }} label={`Label`} placeholder={`Please enter label for field`}  InputProps={{ notched: true }} fullWidth />
				<Field component={TextField} name={`${name}.placeholder`} InputLabelProps={{ shrink: true }} label={`Place Holder`} placeholder={`Please enter placeholder for field`}  InputProps={{ notched: true }} fullWidth />
				<Field component={TextField} name={`${name}.min`} InputLabelProps={{ shrink: true }} label={`Minimum`} placeholder={`Please enter minimum value for field`}  InputProps={{ notched: true }} fullWidth />
				<Field component={TextField} name={`${name}.max`} InputLabelProps={{ shrink: true }} label={`Minimum`} placeholder={`Please enter minimum value for field`}  InputProps={{ notched: true }} fullWidth />
			</div>
		</div>

	)
}


/*
*
* {field_type === "text" || "number" ? null: (
							<div style={{display: "flex", flexDirection:"column", gap: "5px"}}>
							<EditFieldOptions name={`${name}.options`} options={options}   />
							</div>
            )}
*
* */
