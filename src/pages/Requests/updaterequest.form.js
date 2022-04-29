import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import EVADynamicField from '../../components/inputs/EVADynamicField'
import Typography from '@mui/material/Typography'

export default function UpdateRequest({ toast }) {
	const updatestatuses = [
		{ label: 'Active', value: 'active' },
		{ label: 'Inactive', value: 'inactive' },
	]
	return (
		<Formik
			enableReinitialize
			initialValues={{
				update: '',
				status: 'active',
			}}
			onSubmit={(values) => console.log(values)}
		>
			{({ values }) => (
				<Form>
					<Typography>Status</Typography>
					<EVADynamicField
						autoWidth
						fullWidth
						label="Statuse"
						name="status"
						options={updatestatuses}
						placeholder="status"
						type="select"
					/>
					<EVADynamicField
						fullWidth
						label="Update"
						multiline
						name="update"
						placeholder="Update the request here"
						type="text"
						variant="standard"
					/>

					<button type="submit">Save</button>
				</Form>
			)}
		</Formik>
	)
}
