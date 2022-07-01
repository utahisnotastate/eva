import React from 'react'
import {Typography,Button} from "@mui/material"
import { FieldArray, Field, useFormikContext } from 'formik'
import {
	TextField,
} from 'formik-mui';

export default function EditFieldOptions({ name, optionsfieldname, options, ...rest }) {
	return (
		<div style={{flexGrow: 1, padding: "10px"}}>
			<Field component={TextField} style={{marginBottom: "10px"}} name={`${name}.label`} InputLabelProps={{ shrink: true }} label={`Label`} placeholder={`Please enter label for field`}  InputProps={{ notched: true }} fullWidth />
			<Field component={TextField} name={`${name}.placeholder`} InputLabelProps={{ shrink: true }} label={`Place Holder`} placeholder={`Please enter placeholder for field`}  InputProps={{ notched: true }} fullWidth />
			<FieldArray
			name={optionsfieldname}
			render={(arrayHelpers) => (
				<>
					{options && options.length > 0 ? (
						options.map((item, index) => (
							<div style={{ display: 'flex', flexDirection: 'row' }} key={index}>
								<Field component={TextField} name={`${optionsfieldname}.${index}.label`} label={`Option`}
											 InputLabelProps={{ shrink: true }} fullWidth />
								<Button
									onClick={() => arrayHelpers.remove(index)}
									variant={`contained`}
								>
									-
								</Button>
								<Button
									onClick={() => arrayHelpers.insert(index, '')}
									variant={`contained`}
								>
									+
								</Button>
							</div>
						))
					) : (
						<Button onClick={() => arrayHelpers.push({ label: '' })} variant={`contained`}>
							Add New Choice for Field
						</Button>
					)}
				</>
			)}
		/></div>
	)
}
