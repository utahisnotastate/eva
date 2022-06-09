import React from 'react'
import { Grid } from '@mui/material'
import EVAFieldArray from '../../../../../../evaformedit/src/components/inputs/EVAFieldArray'
import InputGallery from '../../../../../../evaformedit/src/components/EVAForm/editfield/editform/inputgallery'
import Card from '../../../../../../evaformedit/src/components/Card/Card'
import CardBody from '../../../../../../evaformedit/src/components/Card/CardBody'
import CardHeader from '../../../../../../evaformedit/src/components/Card/CardHeader'
import Typography from '@mui/material/Typography'
import EVATextField from '../../../../../../evaformedit/src/components/inputs/TextField'
import EVACheckBoxAndLabel from '../../../../../../evaformedit/src/components/inputs/Checkbox'

export default function Edit() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Card>
					<CardHeader color="primary">
						<Typography>Edit Form</Typography>
					</CardHeader>
					<CardBody>
						<EVATextField
							fullWidth
							helperText="Title of the form"
							label="Title"
							name="title"
							variant="standard"
						/>
						<EVACheckBoxAndLabel label="Active" name="active" />
						<EVAFieldArray
							fullWidth
							name="details.fields"
							placeholder="Edit"
							required={false}
							type="text"
						/>
					</CardBody>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<InputGallery />
			</Grid>
		</Grid>
	)
}
