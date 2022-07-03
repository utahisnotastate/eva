import React from 'react'
import { TextField } from 'formik-mui'
import { Field } from 'formik'

export default function Summary() {
	return (
		<div>
			<Field
				component={TextField}
				name={`summary`}
				label="Summary for the appointment"
				fullWidth
				multiline
				rows={4}
				InputLabelProps={{ shrink: true }}
				placeholder="Please enter any additional details / findings about the assessment not otherwise noted"
			/>
		</div>
	)
}
