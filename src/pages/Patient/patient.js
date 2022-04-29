import React, { useState, useEffect } from 'react'
import { Grid, List, Typography } from '@mui/material'
import { Formik, Form } from 'formik'
import Card from '../../components/ui/Card/Card'
import CardBody from '../../components/ui/Card/CardBody'
import CardHeader from '../../components/ui/Card/CardHeader'
import Sidebar from './components/sidebar'
import { useParams, useRouteMatch, Routes, Route } from 'react-router-dom'
import { evaAPIGetAll } from '../../api/util.api'
import DemographicsForm from './components/demographics.form'
import { useDispatch } from 'react-redux'
import FieldArrayForm from './components/arrayfieldform'
import Button from '../../components/ui/Button'

export default function Patient() {
	let { id } = useParams()
	const dispatch = useDispatch()
	const [activelabel, setActiveLabel] = useState('Demographics')
	const [patient, setPatient] = useState({
		allergies: [],
		appointments: [],
		demographics: {
			name: {
				last: '',
				first: 'Utah',
				middle: '',
				prefferd_name: '',
			},
			address: {
				zip: '',
				city: '',
				state: '',
				address_one: '',
				address_two: '',
			},
			date_of_birth: '',
			contact_methods: [
				{
					type: '',
					value: '',
				},
			],
		},
		diagnosis: [],
		medicalhistory: [],
		medications: [],
		actions: [],
		requests: [],
		surgicalhistory: [],
	})
	const arrayfields = [
		{ name: 'diagnosis', label: 'Diagnosis', title: 'Diagnosis' },
		{
			name: 'medicalhistory',
			label: 'medicalhistory',
			title: 'Medical History',
		},
		{
			name: 'surgicalhistory',
			label: 'Surgical History',
			title: 'Surgical History',
		},
	]

	useEffect(() => {
		evaAPIGetAll(`patients/${id}`).then((patient) => {
			console.log(patient)
			setPatient(patient.details)
			//dispatch({ type: 'LOAD_PATIENTS', patients })
		})
	}, [id])
	return (
		<Formik
			enableReinitialize
			initialValues={patient}
			onSubmit={(values) => console.log(values)}
		>
			{({ values }) => (
				<Form>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							gap: '20px',
							backgroundColor: '#f3f3f3',
						}}
					>
						<Card style={{ width: '20%' }}>
							<CardBody>
								<Sidebar setActiveLabel={setActiveLabel} />
							</CardBody>
						</Card>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Card>
								<CardHeader color="primary">
									<Typography variant="h4">{activelabel}</Typography>
								</CardHeader>
								<CardBody>
									<DemographicsForm />
									{arrayfields.map((field, index) => (
										<FieldArrayForm
											items={values[field.name]}
											key={index}
											name={field.name}
											title={field.title}
										/>
									))}
								</CardBody>
							</Card>
							<Button onClick={() => console.log(values)}>Save</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}

/*
<EVADynamicField
								label={activefield.label}
								name={activefield.name}
								type="text"
							/>
 */
