import React, { useState } from 'react'
import {Typography, MenuItem, Grid, FormGroup, Button}  from "@mui/material"
import {
    Autocomplete,
    TextField,
    Select,
    Switch,
    ToggleButtonGroup,
} from 'formik-mui';
import EditField from "./FormFieldsEditor/EditField";
import DynamicEditField from './FormFieldsEditor/DynamicEditField'
import { Formik, Form, Field, FieldArray } from 'formik';

const fieldobject = {label: "", placeholder: "", type: "text"}
//  {label: "Eye Exam", placeholder: "Enter Eye Exam Info", type: "text"}
// {label: "Dementia Exam", placeholder: "Enter Results for Dementia Tests", type: "text"}
// {label: "Alzheimers Exam", placeholder: "Enter Results for Alzheminer Tests", type: "text"}
export default function EVAFormBuilder() {
	return (
        <Formik
            initialValues={{
                fields: [
									{label: "Eye Exam", placeholder: "Enter Eye Exam Info", helperText: "", type: "text"},
									{label: "Dementia Exam", placeholder: "Enter Results for Dementia Tests", helperText: "", type: "text"},
									{label: "Alzheimers Exam", placeholder: "Enter Results for Alzheminer Tests", helperText: "", type: "text"},
									{label: "Test Radio Group", placeholder: "Enter test radio group label", type: "select", helperText: "", options: [{label: "Radio Utah 1"}, {label: "Radio Utah 2"}]}
								],
                new_type: '',
        }}
            onSubmit={(values) => console.log(values)}
            >
            {({values, submitForm, resetForm, isSubmitting, touched, errors, setFieldValue}) => (
                <Form>
									<Button
										variant={`contained`}
										onClick={() => {
											console.log("Preview")
										}}>
										Save
									</Button>
                        <FieldArray
                            name="fields"
                            render={arrayHelpers => (
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    {values.fields && values.fields.length > 0 ? (
                                        values.fields.map((field, index) => (
                                            <div key={index} style={{display: "flex", flexDirection: "row", border: "1px solid black", marginBottom: 10}}>
                                                    <DynamicEditField name={`fields.${index}`} type={field.type} optionsfieldname={`fields.${index}.options`} options={values.fields[index]['options']}  />
                                                <Button
                                                    variant={`contained`}
                                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                >
                                                    X
                                                </Button>
                                            </div>
                                        ))
                                    ) : (
                                        <Typography>No fields on this form. Please add one below</Typography>
                                    )}

                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"100%"}}>
                                            <Field
                                                component={Select}
                                                name={`new_type`}
																								style={{width: "500px"}}
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
																								const {new_type} = values;
																								const hasOptions = new_type === "select" || "radio_group" ? true: false
																								console.log(new_type)
																								console.log(hasOptions)
																								if(hasOptions) {
																									arrayHelpers.push({
																										label: "",
																										placeholder: "",
																										type: new_type,
																										options: []
																									})
																								} else {
																									arrayHelpers.push({
																										label: "",
																										placeholder: "",
																										type: new_type,
																									})
																								}
                                                setFieldValue("new_type", "")
                                            }}>
                                                {/* show this when user has removed all friends from the list */}
                                                Add a Field
                                            </Button>
                                        </div>


                                </div>
                            )}
                        />
									<Button
										variant={`contained`}
										onClick={() => {
											console.log("Preview")
										}}>
										Preview
									</Button>


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
