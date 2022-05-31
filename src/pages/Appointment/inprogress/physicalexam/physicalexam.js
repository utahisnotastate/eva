import React from 'react'
import { FormGenerator } from 'cb-react-forms'

export default function PhysicalExam({ formData, setFormData }) {
	return (
		<div>
			<FormGenerator formData={formData} />
		</div>
	)
}
