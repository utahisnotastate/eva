import React from 'react'
import { Grid, Button } from '@mui/material'

export default function AddItem(props) {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Button color="primary" onClick={props.onClick} variant="contained">
					Add Item
				</Button>
			</Grid>
		</Grid>
	)
}
