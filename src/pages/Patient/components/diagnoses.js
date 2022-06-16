import React from 'react'
import { useFormikContext, FieldArray, Field } from 'formik'
import Button from '@mui/material/Button'
import EVADynamicField from '../../../components/inputs/EVADynamicField'
import EVAFieldArray from '../../../components/inputs/EVAFieldArray'
import { Typography } from 'antd'
export default function Diagnoses({ items, name }) {
	return (
		<FieldArray
			name={name}
			render={(arrayHelpers) => (
				<>
					{items && items.length > 0 ? (
						items.map((item, index) => (
							<div key={index}>
								<EVADynamicField
									name={`${name}.${index}.type`}
									label={`Type`}
								/>
								<EVADynamicField
									name={`${name}.${index}.description`}
									label={`Description`}
									multiline
								/>
								<Button onClick={() => arrayHelpers.remove(index)}>-</Button>
								<Button onClick={() => arrayHelpers.insert(index, '')}>
									+
								</Button>
							</div>
						))
					) : (
						<Button onClick={() => arrayHelpers.push('')}>
							{/* show this when user has removed all friends from the list */}
							Add a friend
						</Button>
					)}
				</>
			)}
		/>
	)
}
