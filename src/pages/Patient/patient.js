import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MedicalHistory from './components/medicalhistory'

function TabPanel({ children, value, index, ...other }) {
	return (
		<div
			aria-labelledby={`simple-tab-${index}`}
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			role="tabpanel"
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
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
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
				</Tabs>
			</Box>
			<TabPanel index={0} value={value}>
				Demographics
			</TabPanel>
			<TabPanel index={1} value={value}>
				Allergies
			</TabPanel>
			<TabPanel index={2} value={value}>
				Diagnoses
			</TabPanel>
			<TabPanel index={3} value={value}>
				Medications
			</TabPanel>
			<TabPanel index={4} value={value}>
				<MedicalHistory />
			</TabPanel>
		</Box>
	)
}
