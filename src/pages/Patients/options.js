import React from 'react'
import EVAModal from '../../components/ui/EVAModal/EVAmodal'

function addNewPatientButton() {
	return (
		<EVAModal
			actiontext={{ agree: `Let's do it`, disagree: 'NO' }}
			buttontext="Add New Patient"
			color="primary"
			description="Register the patient here"
			title="Register New Patient"
		/>
	)
}

const options = {
	searchOpen: true,
	serverSide: false,
	textLabels: {
		body: {
			noMatch: 'SORRY NO MATCHES FOUND',
		},
	},
	searchPlaceholder: 'Search by patient name',
	print: false,
	filter: false,
	download: false,
	selectableRows: 'none',
	customToolbar: addNewPatientButton,
	viewColumns: false,
	enableNestedDataAccess: '.',
}

export default options
