import React, { useState } from 'react'
import { useFormikContext, FieldArray, Field } from 'formik'
import AddComplaint from './addcomplaint/addcomplaint'
import Complaint from './complaint'
import { Grid, Divider, Typography } from '@mui/material'
import Card from '../../../../../../../../../evaformedit/src/components/Card/Card'

export default function Complaints() {
	const { values, setFieldValue } = useFormikContext()
	const [suggestions, setSuggestions] = useState([])
	const [complaint_name, setComplaintName] = useState('')

	return (
		<div>
			<Typography variant="h5">Complaints</Typography>
			<Divider />
			<FieldArray
				name="complaints"
				render={(arrayHelpers) => (
					<div>
						{values.complaints && values.complaints.length > 0 ? (
							<>
								<Grid container spacing={2}>
									{values.complaints.map((complaint, index) => (
										<Grid item key={index} xs={12}>
											<Complaint
												arrayHelpers={arrayHelpers}
												complaint={complaint}
												index={index}
												setComplaintName={setComplaintName}
												setSuggestions={setSuggestions}
												suggestions={suggestions}
											/>
										</Grid>
									))}
								</Grid>
								<Divider />
							</>
						) : (
							<Card>
								<Typography color="textSecondary" variant="body2">
									No complaints
								</Typography>
							</Card>
						)}
						<AddComplaint push={arrayHelpers.push} />
					</div>
				)}
			/>
		</div>
	)
}

/*

 <AddComplaint
                    name="complaints"
                    push={arrayHelpers.push}
                    setFieldValue={setFieldValue}
                    values={values}
                    />
<div key={index}>
										<Field name={`${name}.${index}`} />
										<button
											onClick={() => arrayHelpers.remove(index)}
											type="button" // remove a friend from the list
										>
											-
										</button>
										<button
											onClick={() => arrayHelpers.insert(index, '')}
											type="button" // insert an empty string at a position
										>
											+
										</button>
									</div>
 */
