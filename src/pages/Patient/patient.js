import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MedicalHistory from './components/medicalhistory'
import { Formik, Form } from 'formik'
import Demographics from './components/demographics'
import Allergies from './components/allergies'
import Diagnoses from './components/diagnoses'
import Medications from './components/medications'
function TabPanel({ children, value, index, ...other }) {
	return (
		<div
			aria-labelledby={`simple-tab-${index}`}
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			role="tabpanel"
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function Patient() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Formik
				onSubmit={(values) => console.log(values)}
				initialValues={{
					details: {
						familyhistory: [],
						socialhistory: [],
						medicalhistory: [],
						surgicalhistory: [],
						allergies: [],
						requests: [],
						diagnoses: [],
						insurances: [],
						medications: [],
						appointments: [],
						first_name: '',
						last_name: '',
						middle_name: '',
						preffered_name: '',
						address_one: '',
						address_two: '',
						city: '',
						state: '',
						zip: '',
						date_of_birth: '',
						contact_methods: [],
					},
				}}
			>
				{({ values }) => (
					<Form>
						<Tabs
							aria-label="basic tabs example"
							centered
							onChange={handleChange}
							value={value}
						>
							<Tab label="Demographics" {...a11yProps(0)} />
							<Tab label="Allergies" {...a11yProps(1)} />
							<Tab label="Diagnosese" {...a11yProps(2)} />
							<Tab label="Medications" {...a11yProps(3)} />
							<Tab label="Medical History" {...a11yProps(4)} />
							<Tab label="Appointments" {...a11yProps(5)} />
							<Tab label="Requestss" {...a11yProps(6)} />
							<Tab label="Actions" {...a11yProps(7)} />
							<Tab label="Contact Methods" {...a11yProps(8)} />
						</Tabs>

						<TabPanel index={0} value={value}>
							<Demographics />
						</TabPanel>
						<TabPanel index={1} value={value}>
							<Allergies
								items={values.details.allergies}
								name={`details.allergies`}
							/>
						</TabPanel>
						<TabPanel index={2} value={value}>
							<Diagnoses
								items={values.details.diagnoses}
								name={`details.diagnoses`}
							/>
						</TabPanel>
						<TabPanel index={3} value={value}>
							<Medications
								items={values.details.medications}
								name={`details.medications`}
							/>
						</TabPanel>
						<TabPanel index={4} value={value}>
							<MedicalHistory />
						</TabPanel>
						<TabPanel index={5} value={value}>
							<p>Appointments</p>
						</TabPanel>
						<TabPanel index={6} value={value}>
							Requests
						</TabPanel>
						<TabPanel index={7} value={value}>
							Actions
						</TabPanel>
						<TabPanel index={8} value={value}>
							Contact Methods
						</TabPanel>
					</Form>
				)}
			</Formik>
		</Box>
	)
}
