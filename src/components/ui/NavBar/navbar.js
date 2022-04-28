import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
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
			</AppBar>
		</Box>
	)
}
