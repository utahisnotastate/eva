import React from 'react'
import {Typography,Button} from "@mui/material"
import { FieldArray, Field } from 'formik'
import {
	TextField,
} from 'formik-mui';

export default function EditFieldOptions({ name, options = [] }) {
	return (
		<FieldArray
			name={name}
			render={(arrayHelpers) => (
				<>
					{options && options.length > 0 ? (
						options.map((item, index) => (
							<div style={{display: "flex", flexDirection: "row"}} key={index}>
								<Field component={TextField} name={`${name}.${index}.label`} label={`Option`} InputLabelProps={{ shrink: true }} fullWidth />
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
						<Button onClick={() => arrayHelpers.push({label: ''})} variant={`contained`}>
							Add New Choice for Field
						</Button>
					)}
				</>
			)}
		/>
	)
}
