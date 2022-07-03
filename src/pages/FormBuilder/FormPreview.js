import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { evaAPIPutItem } from '../../api/util.api'
import EVADynamicField from '../../components/inputs/EVADynamicField'
import { Typography, Divider } from '@mui/material'

export default function FormPreview({ form }) {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Preview Form
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Physical Exam</DialogTitle>
				<Divider />
				<DialogContent>
					<Formik
						enableReinitialize={true}
						initialValues={form}
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
								<>
									{form.fields && form.fields.length > 0 ? (
										form.fields.map((field, index) => (
											<div key={index} style={{ marginBottom: '15px' }}>
												<EVADynamicField
													name={`fields.${index}.value`}
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
										<Typography variant="h6">No Fields</Typography>
									)}
								</>
								<>
									<pre>{JSON.stringify(form, null, 2)}</pre>
								</>
							</Form>
						)}
					</Formik>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

/*

<Form>
								<>
									<pre>
										{JSON.stringify(form, null, 2)}
									</pre>
								</>
								<>
									{form.fields && form.fields.length > 0 ? (
										form.fields.map((field, index) => (
											<EVADynamicField
												key={index}
												name={field.label}
												label={field.label}
												placeholder={field.placeholder}
												type={field.type}
												options={field.options}
												helperText={field.helperText}
											/>
										))
									) : (
										<p>No Fields on Form. </p>
									)}
								</>
							</Form>
*
* <FieldArray
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
												<Typography>No fields on this form</Typography>
											)}
										</div>
									)}
								/>
*
* */
