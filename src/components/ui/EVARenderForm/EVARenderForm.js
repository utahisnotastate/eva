import React from 'react'
import EVADynamicField from '../../components/inputs/EVADynamicField'
import { Typography } from '@mui/material'

export default function EVARenderFormFields({ fields, name }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{fields && fields.length > 0 ? (
				fields.map((field, index) => (
					<div key={index} style={{ marginBottom: '15px' }}>
						<EVADynamicField
							name={`${name}.${index}.value`}
							placeholder={field.placeholder}
							options={field.options}
							helperText={field.helperText}
							type={field.type}
							label={field.label}
							required={field.required}
							disabled={field.disabled}
						/>
					</div>
				))
			) : (
				<Typography variant="h6">No Fields Listed on Form</Typography>
			)}
		</div>
	)
}
