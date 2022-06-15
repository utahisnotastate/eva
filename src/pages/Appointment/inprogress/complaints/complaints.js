import React from 'react'
import Typography from '@mui/material/Typography'
import { useFormikContext, FieldArray } from 'formik'

export default function Complaints() {
	const { values } = useFormikContext()
	return (
		<div>
			<Typography>Complaints</Typography>
		</div>
	)
}
