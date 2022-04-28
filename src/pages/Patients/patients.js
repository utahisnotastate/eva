import React from 'react'
import MUIDataTable from 'mui-datatables'
import columns from './columns'
import options from './options'

export default function Patients() {
	return (
		<MUIDataTable
			columns={columns}
			data={[]}
			options={options}
			title="Patients"
		/>
	)
}
