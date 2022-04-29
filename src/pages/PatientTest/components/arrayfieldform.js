import React from 'react'
import { FieldArray, Field } from 'formik'
import { Typography } from '@mui/material'

export default function FieldArrayForm({ name, items, title }) {
	return (
		<div>
			<Typography variant="h6">{title}</Typography>
			<FieldArray
				name={name}
				render={(arrayHelpers) => (
					<>
						{items && items.length > 0 ? (
							items.map((item, index) => (
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
							))
						) : (
							<button onClick={() => arrayHelpers.push('')} type="button">
								{/* show this when user has removed all friends from the list */}
								Add a Diagnosis
							</button>
						)}
					</>
				)}
			/>
		</div>
	)
}
