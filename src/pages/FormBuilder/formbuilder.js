import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { evaAPIGetItem, evaAPIPutItem } from '../../api/util.api'
import { Typography, MenuItem, Button } from '@mui/material'
import EVAPreviewFormDialog from '../../components/ui/EVAPreviewFormDialog'
import { TextField, Select } from 'formik-mui'
import DynamicEditField from './FormFieldsEditor/DynamicEditField'
import { Formik, Form, Field, FieldArray } from 'formik'

export default function EVAFormBuilder() {
	const formbuilder = useSelector((state) => state.formbuilder)
	const dispatch = useDispatch()
	const baseSettings = {
		id: 1,
		name: 'Kensington Medical Practice',
		details: null,
		physical_exam_form: {
			title: '',
			fields: [],
			new_type: '',
			description: '',
		},
		review_of_systems_form: {
			title: '',
			fields: [],
			new_type: '',
			description: '',
		},
	}

	useEffect(() => {
		/*evaAPIGetAll('settings').then((res) => {
			console.log(res)
		})*/

		evaAPIGetItem('settings', '1').then((res) => {
			dispatch({ type: 'LOAD_FORM', form: res.physical_exam_form })
			console.log(res)
		})
	}, [])
	return (
		<Formik
			enableReinitialize={true}
			initialValues={formbuilder}
			onSubmit={(values) => {
				baseSettings.physical_exam_form = values
				console.log(baseSettings)
				evaAPIPutItem('settings', '1', baseSettings).then((res) => {
					console.log(res)
					dispatch({ type: 'LOAD_FORM', form: res.physical_exam_form })
				})
			}}
		>
			{({
				values,
				submitForm,
				resetForm,
				isSubmitting,
				touched,
				errors,
				setFieldValue,
			}) => (
				<Form>
					<Button variant={`contained`} onClick={submitForm}>
						Save
					</Button>
					<>
						<Field
							component={TextField}
							name="title"
							label="Title"
							placeholder="Please enter title"
							InputProps={{ notched: true }}
							fullWidth
						/>
						<Field
							component={TextField}
							name="description"
							label="Description"
							placeholder="Please enter description"
							InputProps={{ notched: true }}
							fullWidth
							multiline
							rows={5}
						/>
					</>
					<FieldArray
						name="fields"
						render={(arrayHelpers) => (
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								{values.fields && values.fields.length > 0 ? (
									values.fields.map((field, index) => (
										<div
											key={index}
											style={{
												display: 'flex',
												flexDirection: 'row',
												border: '1px solid black',
												marginBottom: 10,
											}}
										>
											<DynamicEditField
												name={`fields.${index}`}
												type={field.type}
												optionsfieldname={`fields.${index}.options`}
												options={values.fields[index]['options']}
											/>
											<Button
												variant={`contained`}
												onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
											>
												X
											</Button>
										</div>
									))
								) : (
									<Typography>
										No fields on this form. Please add one below
									</Typography>
								)}

								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										width: '100%',
									}}
								>
									<Field
										component={Select}
										name={`new_type`}
										style={{ width: '500px' }}
										label="Choose New Field Type"
									>
										<MenuItem value={`text`}>Text</MenuItem>
										<MenuItem value={`number`}>Number</MenuItem>
										<MenuItem value={`date`}>Date</MenuItem>
										<MenuItem value={`range`}>Range</MenuItem>
										<MenuItem value={`select`}>Select</MenuItem>
										<MenuItem value={`radio_group`}>Radio Group</MenuItem>
									</Field>
									<Button
										variant={`contained`}
										onClick={() => {
											const { new_type } = values
											const hasOptions =
												new_type === 'select' || 'radio_group' ? true : false
											if (hasOptions) {
												arrayHelpers.push({
													label: '',
													placeholder: '',
													type: new_type,
													options: [],
												})
											} else {
												arrayHelpers.push({
													label: '',
													placeholder: '',
													type: new_type,
												})
											}
											setFieldValue('new_type', '')
										}}
									>
										{/* show this when user has removed all friends from the list */}
										Add a Field
									</Button>
								</div>
							</div>
						)}
					/>
					<EVAPreviewFormDialog
						openDialogButtonText={`Preview Form`}
					></EVAPreviewFormDialog>
				</Form>
			)}
		</Formik>
	)
}

/*arrayHelpers.push({
                                                    label: "",
                                                    placeholder: "",
                                                    type: new_type,
                                                    options: new_type === "select" || "radio_group" ? [] : null
                                                })*/

/*
 *
 *
 *
 *
 *
 * */
