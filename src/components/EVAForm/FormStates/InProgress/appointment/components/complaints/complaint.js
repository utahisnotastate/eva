/*
import React from 'react'
import { useFormikContext } from 'formik'
import EVADynamicField from '../../'
import Card from '../../../../../../../../../evaformedit/src/components/Card/Card'
import CardBody from '../../../../../../../../../evaformedit/src/components/Card/CardBody'
import CardHeader from '../../../../../../../../../evaformedit/src/components/Card/CardHeader'

export default function Complaint({ index }) {
	const { values, setFieldValue } = useFormikContext()
	return (
		<Card>
			<CardHeader>Complaint</CardHeader>
			<CardBody>
				<EVADynamicField
					fullWidth
					label="Condition"
					name={`complaints.${index}.condition`}
					type="text"
					variant="outlined"
				/>

				<EVADynamicField
					fullWidth
					label="Description"
					multiline
					name={`complaints.${index}.description`}
					type="text"
					variant="outlined"
				/>
			</CardBody>
		</Card>
	)
}

/!*
<EVADynamicField
					fullWidth
					label="Onset"
					name={`complaints.${index}.onset`}
					type="date"
				/>
 *!/
*/
