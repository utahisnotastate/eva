import React from 'react'
import EVATextField from './TextField'
import EVASelect from './Select'
import EVAFieldArray from './EVAFieldArray'

export default function EVADynamicField({
	name,
	label,
	value,
	type,
	options,
	helperText,
	...rest
}) {
	switch (type) {
		case 'text':
			return <EVATextField label={label} name={name} {...rest} />
		case 'select':
			return <EVASelect name={name} options={options} />
		case 'fieldarray':
			return <EVAFieldArray label={label} name={name} />

		default:
			return <EVATextField label={label} name={name} placeholder="test2" />
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
