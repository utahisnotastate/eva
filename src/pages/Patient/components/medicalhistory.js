import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel({ children, value, index, ...other }) {
	return (
		<div
			aria-labelledby={`vertical-tab-${index}`}
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
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
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

export default function MedicalHistory() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: 'background.paper',
				display: 'flex',
				height: 224,
			}}
		>
			<Tabs
				aria-label="Vertical tabs example"
				onChange={handleChange}
				orientation="vertical"
				sx={{ borderRight: 1, borderColor: 'divider' }}
				value={value}
				variant="scrollable"
			>
				<Tab label="Surgical" {...a11yProps(0)} />
				<Tab label="Social" {...a11yProps(1)} />
				<Tab label="Medical" {...a11yProps(2)} />
			</Tabs>
			<TabPanel index={0} value={value}>
				Surgical
			</TabPanel>
			<TabPanel index={1} value={value}>
				Social
			</TabPanel>
			<TabPanel index={2} value={value}>
				Medical
			</TabPanel>
		</Box>
	)
}
