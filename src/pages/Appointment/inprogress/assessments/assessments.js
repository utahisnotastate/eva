import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { TextField } from 'formik-mui'
import { useFormikContext, FieldArray, Field } from 'formik'

export default function Assessments() {
	const { values } = useFormikContext()
	return (
		<div>
			<FieldArray
				name="assessments"
				render={(arrayHelpers) => (
					<div>
						{values.assessments && values.assessments.length > 0 ? (
							values.assessments.map((assessment, index) => (
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
										name={`assessments.${index}.icdCode`}
										label="ICD Code"
										fullWidth
										InputLabelProps={{ shrink: true }}
										placeholder="ICD Code"
									/>
									<Field
										component={TextField}
										name={`assessments.${index}.details`}
										label="Additional Details"
										fullWidth
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
								No Assessments. Please add one below.
							</Typography>
						)}

						<div>
							<Button
								variant={`contained`}
								color={`primary`}
								onClick={() => arrayHelpers.push('')}
							>
								{/* show this when user has removed all friends from the list */}
								Add Assessment
							</Button>
						</div>
					</div>
				)}
			/>
		</div>
	)
}
