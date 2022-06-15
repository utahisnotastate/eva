const blankpatient = {
	first_name: '',
	last_name: '',
	middle_name: '',
	preferred_name: '',
	date_of_birth: '',
	contact_methods: [],
	details: {
		demographics: {
			race: '',
			gender: '',
			marital_status: '',
			employment_status: '',
		},
		address: {
			address_one: '',
			address_two: '',
			city: '',
			state: '',
			zip_code: '',
		},
		allergies: [],
		medical_history: [],
		loadSurgicalHistory: [],
		contact_methods: [],
	},
	ssn: '',
	history: {
		medical_history: [],
		allergies: [],
		surgical_history: [],
	},
}

export default blankpatient
