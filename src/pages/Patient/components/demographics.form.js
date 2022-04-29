import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import EVADynamicField from '../../../components/inputs/EVADynamicField'

export default function DemographicsForm() {
	const demographicsfields = [
		{
			label: 'Demographics,',
			fields: [
				{ name: 'demographics.name.last', label: 'Last Name' },
				{
					name: 'demographics.name.first',
					label: 'First Name',
				},
				{
					name: 'demographics.name.middle',
					label: 'Middle Name',
				},
				{
					name: 'demographics.name.prefferd_name',
					label: 'Prefferd Name',
				},
			],
		},
		{
			label: 'Address,',
			fields: [
				{ name: 'demographics.address.address_one', label: 'Address One' },
				{ name: 'demographics.address.address_two', label: 'Address Two' },
				{ name: 'demographics.address.zip', label: 'Address Zip' },
				{ name: 'demographics.address.city', label: 'City' },
				{ name: 'demographics.address.state', label: 'State' },
			],
		},
	]

	return (
		<div>
			<Grid container direction="column" spacing={2}>
				<Grid item>
					<EVADynamicField
						label="Date of Birth"
						name="demographics.date_of_birth"
						type="text"
					/>
				</Grid>
				{demographicsfields.map((demographic, index) => (
					<div key={index}>
						<Grid item variant="h6">
							{demographic.label}
						</Grid>
						<Grid item>
							{demographic.fields.map((field, index) => (
								<EVADynamicField
									key={index}
									label={field.label}
									name={field.name}
								/>
							))}
						</Grid>
					</div>
				))}
			</Grid>
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
