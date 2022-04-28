import React, { useState } from 'react'
import { Grid, List, Typography } from '@mui/material'
import Card from '../../components/ui/Card/Card'
import CardBody from '../../components/ui/Card/CardBody'
import CardHeader from '../../components/ui/Card/CardHeader'
import Sidebar from './components/sidebar'

const patient = {
	allergies: [],
	appointments: [],
	demographics: {
		age: '',
		birthDate: '',
	},
	diagnosis: [],
	medicalhistory: [],
	medications: [],
	actions: [],
	requests: [],
	surgicalhistory: [],
}

export default function Patient() {
	const [routecontent, setRoutecontent] = useState('Demographics')
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				gap: '20px',
				backgroundColor: '#f3f3f3',
			}}
		>
			<Card style={{ width: '20%' }}>
				<CardBody>
					<Sidebar />
				</CardBody>
			</Card>
			<Card>
				<CardHeader color="primary">
					<Typography variant="h4">{routecontent}</Typography>
				</CardHeader>
				<CardBody>
					<p>Component to render</p>
				</CardBody>
			</Card>
		</div>
	)
}
