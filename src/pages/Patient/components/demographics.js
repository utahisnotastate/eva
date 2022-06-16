import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Input } from 'antd'
import { Field } from 'formik'
import EVADynamicField from '../../../components/inputs/EVADynamicField'

export default function Demographics() {
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
				<Typography variant="h6">Name</Typography>
				<EVADynamicField
					label="First Name"
					name="details.first_name"
					placeHolder="First Name"
				/>
				<EVADynamicField label="Last Name" name="details.last_name" />
				<EVADynamicField label="Middle Name" name="details.middle_name" />
				<EVADynamicField label="Preferred Name" name="details.preffered_name" />
				<EVADynamicField label="Date of Birth" name="details.date_of_birth" />
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
				<EVADynamicField label="Address 1" name="details.address_one" />
				<EVADynamicField label="Address 2" name="details.address_two" />
				<EVADynamicField label="City" name="details.city" />
				<EVADynamicField label="State" name="details.state" />
				<EVADynamicField label="Zip" name="details.zip" />
			</div>
		</div>
	)
}
