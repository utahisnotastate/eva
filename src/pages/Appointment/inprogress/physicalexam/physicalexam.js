import React from 'react'
import { useFormikContext } from 'formik'
import { useSelector } from 'react-redux'
import EVADynamicField from '../../../../components/inputs/EVADynamicField'

export default function PhysicalExam() {
	const formbuilder = useSelector((state) => state.formbuilder)
	const { values } = useFormikContext()
	return (
		<div>
			{values.physicalexam && values.physicalexam.length > 0
				? values.physicalexam.map((field, index) => (
						<div key={index} style={{ marginBottom: '15px' }}>
							<EVADynamicField
								name={`physicalexam.${index}.value`}
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
				: formbuilder.map((field, index) => (
						<div key={index} style={{ marginBottom: '15px' }}>
							<EVADynamicField
								name={`physicalexam.${index}.value`}
								placeholder={field.placeholder}
								options={field.options}
								helperText={field.helperText}
								type={field.type}
								label={field.label}
								required={field.required}
								disabled={field.disabled}
							/>
						</div>
				  ))}
		</div>
	)
}
