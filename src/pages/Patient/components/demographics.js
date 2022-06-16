import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Input } from 'antd'
import { Field } from 'formik'
import EVADynamicField from '../../../components/inputs/EVADynamicField'

export default function Demographics() {
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
				<EVADynamicField
					label="First Name"
					name="details.first_name"
					type="text"
				/>
				<EVADynamicField
					label="Middle Name"
					name="details.middle_name"
					type="text"
				/>
				<EVADynamicField
					label="Last Name"
					name="details.last_name"
					type="text"
				/>
				<EVADynamicField
					label="Preferred Name"
					name="details.preffered_name"
					type="text"
				/>
				<EVADynamicField
					label="Date of Birth"
					name="details.date_of_birth"
					type="text"
				/>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
				<EVADynamicField
					label="Address 1"
					name="details.address_one"
					type="text"
				/>
				<EVADynamicField
					label="Address 2"
					name="details.address_two"
					type="text"
				/>
				<EVADynamicField label="City" name="details.city" type="text" />
				<EVADynamicField label="State" name="details.state" type="text" />
				<EVADynamicField label="Zip" name="details.zip" type="text" />
			</div>
		</div>
	)
}

/*
 *
 *
 * */
