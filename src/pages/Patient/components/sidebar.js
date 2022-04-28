import * as React from 'react'
import { Divider, Typography, Stack } from '@mui/material'

export default function Sidebar({ items }) {
	const routes = [
		{ label: 'Allergies', name: 'allergies', type: 'arrayfield' },
		{ label: 'Appointments', name: 'appointments', type: 'arrayfield' },
		{ label: 'Caregivers', name: 'caregivers', type: 'arrayfield' },
		{ label: 'Conditions', name: 'conditions', type: 'arrayfield' },
		{ label: 'Immunizations', name: 'immunizations', type: 'arrayfield' },
		{ label: 'Medications', name: 'medications', type: 'arrayfield' },
		{ label: 'Problems', name: 'problems', type: 'arrayfield' },
		{ label: 'Procedures', name: 'procedures', type: 'arrayfield' },
		{ label: 'Vitals', name: 'vitals', type: 'arrayfield' },
	]
	return (
		<Stack direction="column" divider={<Divider flexItem />}>
			{routes.map((route, index) => (
				<Typography key={index}>{route.label}</Typography>
			))}
		</Stack>
	)
}
