import React from 'react'
import EVATextField from './TextField'
import EVASelect from './Select'

export default function EVADynamicField({
	name,

	value,
	type,
	options,
	helperText,
	...rest
}) {
	switch (type) {
		case 'text':
			return <EVATextField name={name} {...rest} />
		case 'select':
			return <EVASelect name={name} options={options} />
		default:
			return (
				<EVATextField
					label={label}
					name={name}
					placeholder="test2"
					{...props}
				/>
			)
	}
}

/*
export default function EVADynamicField({
	name,
	label,
	value,
	type,
	options,
	helperText,
	...props
}) {
	switch (type) {
		case 'text':
			return <EVATextField label={label} name={name} {...props} />
		default:
			return <EVATextField label={label} name={name} {...props} />
	}
}

 */
