import React, { useState, useEffect } from 'react'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import Button from '@mui/material/Button'
import { JsonForms } from '@jsonforms/react'
import schema from './allergies.schema.json'
import uischema from './allergies.uischema.json'

export default function AllergiesForm() {
	const [allergies, setAllergies] = useState(schema)
	return (
		<>
			<JsonForms
				schema={schema}
				data={allergies}
				renderers={materialRenderers}
				cells={materialCells}
				onChange={({ data }) => setAllergies(data)}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					console.log(allergies)
				}}>
				Save
			</Button>
		</>
	)
}
