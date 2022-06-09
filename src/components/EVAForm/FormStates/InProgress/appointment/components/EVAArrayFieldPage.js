import React, { useState } from 'react'
import { useFormikContext, FieldArray, Field } from 'formik'

import { Grid, Divider, Typography } from '@mui/material'

export default function EVAArrayFieldPage({ title, name, items }) {
	const { values, setFieldValue } = useFormikContext()

	return (
		<div>
			<Typography variant="h5">{title}</Typography>
			<Divider />
			<FieldArray
				name={name}
				render={(arrayHelpers) => (
					<div>
						{items && items.length > 0 ? (
							<>
								<Grid container spacing={2}>
									{items.map((complaint, index) => (
										<Grid item key={index} xs={12}>
											<Typography>Test</Typography>
										</Grid>
									))}
								</Grid>
								<Divider />
							</>
						) : (
							<Typography color="textSecondary" variant="body2">
								No complaints
							</Typography>
						)}
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
