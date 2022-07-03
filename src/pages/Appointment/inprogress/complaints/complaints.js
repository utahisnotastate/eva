import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { TextField } from 'formik-mui'
import { useFormikContext, FieldArray, Field } from 'formik'

export default function Complaints() {
	const { values } = useFormikContext()
	return (
		<div>
			<FieldArray
				name="complaints"
				render={(arrayHelpers) => (
					<div>
						{values.complaints && values.complaints.length > 0 ? (
							values.complaints.map((complaint, index) => (
								<div
									key={index}
									style={{
										display: 'flex',
										flexDirection: 'row',
										margin: '15px',
									}}
								>
									<Field
										component={TextField}
										name={`complaints.${index}.complaint`}
										label="Complaint"
										fullWidth
										InputLabelProps={{ shrink: true }}
										placeholder="Complaint"
									/>
									<Field
										component={TextField}
										name={`complaints.${index}.details`}
										label="Additional Details"
										fullWidth
										InputLabelProps={{ shrink: true }}
										placeholder="Please enter any additional details about complaint"
									/>

									<Button
										variant="contained"
										color="error"
										onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
									>
										X
									</Button>
								</div>
							))
						) : (
							<button type="button" onClick={() => arrayHelpers.push('')}>
								{/* show this when user has removed all friends from the list */}
								Add a friend
							</button>
						)}

						<div>
							<Button
								variant={`contained`}
								color={`primary`}
								onClick={() => arrayHelpers.push('')}
							>
								{/* show this when user has removed all friends from the list */}
								Add Complaint
							</Button>
						</div>
					</div>
				)}
			/>
		</div>
	)
}
