/*
import React from 'react'
import Typography from '@mui/material/Typography'
import { useFormikContext, FieldArray } from 'formik'

export default function Complaints() {
	const { values } = useFormikContext()
	return (
		<div>
			<Typography>Complaints</Typography>
			<div>
				<FieldArray
					name="complaints"
					render={(arrayHelpers) => (
						<div>
							{!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!values.complaints && values.complaints.length > 0 && values.complaints.map((complaint, index) => (
										<div key={index}>
											<p>Complaint</p>
										</div>
								  ))}
						</div>
					)}
				/>
			</div>
		</div>
	)
}
*/
