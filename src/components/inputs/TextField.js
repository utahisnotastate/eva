import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-mui'

export default function EVATextField(props) {
	return <Field component={TextField} {...props} />
}
