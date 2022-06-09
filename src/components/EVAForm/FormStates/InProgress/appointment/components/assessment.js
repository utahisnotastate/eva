import React from 'react'
import { useFormikContext } from 'formik'
import EVAFieldArray from '../../../../../../../../evaformedit/src/components/inputs/EVAFieldArray'

export default function Assessment() {
	const { values, setFieldValue } = useFormikContext()
	return <EVAFieldArray items={values.assessment} name="assessment" />
}
