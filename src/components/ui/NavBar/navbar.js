import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function NavBar() {
	const navlinks = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Patients',
			link: '/patients',
		},
		{
			name: 'Form Builder',
			link: '/formbuilder',
		},
		{
			name: 'Requests',
			link: '/requests',
		},
		{
			name: 'Scheduling',
			link: '/scheduling',
		},
	]
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					{navlinks.map((navlink, index) => (
						<Link key={index} to={navlink.link}>
							<Typography color="white" style={{ margin: '10px' }} variant="h6">
								{navlink.name}
							</Typography>
						</Link>
					))}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

/*
<Toolbar>
					<Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						Home
					</Typography>
					<Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						Patients
					</Typography>
					<Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						Form Builder
					</Typography>
					<Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						Requests
					</Typography>
					<Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						Scheduling
					</Typography>
				</Toolbar>
 */
