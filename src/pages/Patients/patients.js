import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import columns from './columns'
import options from './options'
import { evaAPIGetAll } from '../../api/util.api'

export default function Patients({ patients }) {
	const dispatch = useDispatch()
	//const [loading, setLoading] = useState(true)
	//const [patients, setPatients] = useState([])

	//const patients = useSelector((state) => state.patients)

	/*	useEffect(() => {
		evaAPIGetAll('patients').then((patients) => {
			console.log(patients.data)
			//dispatch({ type: 'LOAD_PATIENTS', patients })

			//setPatients(patients.data)
			setPatients(patients.data)
		})
	}, [])*/

	return (
		<MUIDataTable
			columns={columns}
			data={patients}
			options={options}
			title="Patients"
		/>
	)
}
