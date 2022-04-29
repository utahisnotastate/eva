import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import NavLinkButton from '../../components/ui/navlinkbutton'

const columns = [
	{
		name: 'id',
		label: 'Patient id',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'details.demographics.name.first',
		label: 'First Name',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'details.demographics.name.last',
		label: 'Last Name',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'details.demographics.date_of_birth',
		label: 'Date of Birth',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'gender',
		label: 'Gender',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'actions',
		label: 'Actions',
		options: {
			filter: false,
			sort: false,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) => (
				<Link to={`/patients/${tableMeta.rowData[0]}`}>View Chart</Link>
			),
		},
	},
]

export default columns
