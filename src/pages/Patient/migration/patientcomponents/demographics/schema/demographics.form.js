import React, { useState, useEffect } from 'react'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import Button from '@mui/material/Button'
import { JsonForms } from '@jsonforms/react'
import schema from './demographics.schema.json'
import uischema from './demographics.uischema.json'

export default function DemographicsForm() {
	const [demographics, setDemographics] = useState(schema)
	return (
		<>
			<JsonForms
				schema={schema}
				data={demographics}
				renderers={materialRenderers}
				cells={materialCells}
				onChange={({ data }) => setDemographics(data)}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					console.log(demographics)
				}}>
				Save
			</Button>
		</>
	)
}
