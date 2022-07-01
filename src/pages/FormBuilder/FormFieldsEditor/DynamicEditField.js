import React, { useState } from 'react'
import TextFieldEditor from './DynamicEditFields/TextFieldEditor'
import NumberFieldEditor from './DynamicEditFields/NumberFieldEditor'
import EditFieldOptions from './EditFieldOptions'


export default function DynamicEditField({name, type,options,  optionsfieldname, ...rest}) {
	switch (type) {
		case "select":
			return <EditFieldOptions name={name} optionsfieldname={optionsfieldname} options={options}  {...rest}  />

		case "radio_group":
			return <EditFieldOptions name={name} optionsfieldname={optionsfieldname}  options={options} {...rest}  />

		case 'number':
			return <NumberFieldEditor name={name}  />
		default:
			return <TextFieldEditor name={name} />

	}
}


/*
*
* {field_type === "text" || "number" ? null: (
							<div style={{display: "flex", flexDirection:"column", gap: "5px"}}>
							<EditFieldOptions name={`${name}.options`} options={options}   />
							</div>
            )}
*
* */
