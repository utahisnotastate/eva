import React from 'react'
import Typography from '@mui/material/Typography'
import EVATextField from '../../../../../../../../evaformedit/src/components/inputs/TextField'
import { useFormikContext } from 'formik'

export default function Summary() {
	const { values } = useFormikContext()
	return (
		<div>
			<EVATextField
				fullWidth
				label="Summary"
				multiline
				name="summary"
				rows={4}
				variant="outlined"
			/>
		</div>
	)
}
