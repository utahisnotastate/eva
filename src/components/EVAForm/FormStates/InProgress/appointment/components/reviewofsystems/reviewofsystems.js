import * as React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel(props) {
	const { children, value, index, ...other } = props

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

export default function ReviewOfSystems() {
	const [value, setValue] = React.useState(0)
	const forms = useSelector((state) => state.forms)

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
				{forms && forms.length > 0 ? (
					forms.map((item, index) => (
						<Tab key={index} label={item.title} {...a11yProps(index)} />
					))
				) : (
					<Tab label="No data" {...a11yProps(0)} />
				)}
			</Tabs>
			<TabPanel index={0} value={value}>
				Item One
			</TabPanel>
			<TabPanel index={1} value={value}>
				Item Two
			</TabPanel>
			<TabPanel index={2} value={value}>
				Item Three
			</TabPanel>
			<TabPanel index={3} value={value}>
				Item Four
			</TabPanel>
			<TabPanel index={4} value={value}>
				Item Five
			</TabPanel>
			<TabPanel index={5} value={value}>
				Item Six
			</TabPanel>
			<TabPanel index={6} value={value}>
				Item Seven
			</TabPanel>
		</Box>
	)
}

/*
<Tab label="Item One" />
				<Tab label="Item Two" />
				<Tab label="Item Three" />
				<Tab label="Item Four" />
				<Tab label="Item Five" />
				<Tab label="Item Six" />
				<Tab label="Item Seven" />
 */
