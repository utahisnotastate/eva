import * as React from 'react'
import { Divider, Typography, Stack } from '@mui/material'

export default function Sidebar({ items, setActiveLabel }) {
	const routes = [
		{ label: 'Allergies', name: 'allergies', type: 'fieldarray' },
		{ label: 'Appointments', name: 'appointments', type: 'fieldarray' },
		{ label: 'Demographics', name: 'demographics', type: 'fieldarray' },
		{ label: 'Diagnosis', name: 'diagnosis', type: 'arrayfield' },
		{ label: 'Medical History', name: 'medicalhistory', type: 'arrayfield' },
		{ label: 'Medications', name: 'medications', type: 'arrayfield' },
		{ label: 'Requests', name: 'requests', type: 'arrayfield' },
		{ label: 'Surgical History', name: 'surgicalhistory', type: 'arrayfield' },
	]
	return (
		<Stack direction="column" divider={<Divider flexItem />}>
			{routes.map((route, index) => (
				<Typography key={index} onClick={() => setActiveLabel(route.label)}>
					{route.label}
				</Typography>
			))}
		</Stack>
	)
}
