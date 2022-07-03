import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { TextField } from 'formik-mui'
import { useFormikContext, FieldArray, Field } from 'formik'

export default function FollowUp() {
	const { values } = useFormikContext()
	return (
		<div>
			<FieldArray
				name="follwups"
				render={(arrayHelpers) => (
					<div>
						{values.follwups && values.follwups.length > 0 ? (
							values.follwups.map((followup, index) => (
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
										name={`follwups.${index}.type`}
										label="Type"
										fullWidth
										InputLabelProps={{ shrink: true }}
										placeholder="Followup Type"
									/>
									<Field
										component={TextField}
										name={`follwups.${index}.provider_follow_up`}
										label="Followup Instructions for Providers"
										fullWidth
										multiline
										rows={4}
										InputLabelProps={{ shrink: true }}
										placeholder="Please enter any additional details about the assessment"
									/>
									<Field
										component={TextField}
										name={`follwups.${index}.patient_follow_up`}
										label="Followup Instructions for Patients"
										fullWidth
										multiline
										rows={4}
										InputLabelProps={{ shrink: true }}
										placeholder="Please enter any additional details about the assessment"
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
							<Typography variant="body1">
								No Follow Ups. Please add one below.
							</Typography>
						)}

						<div>
							<Button
								variant={`contained`}
								color={`primary`}
								onClick={() => arrayHelpers.push('')}
							>
								{/* show this when user has removed all friends from the list */}
								Add new Follow Up
							</Button>
						</div>
					</div>
				)}
			/>
		</div>
	)
}
