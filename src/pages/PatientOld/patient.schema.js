const demographics = {
	type: 'object',
	properties: {
		name: {
			type: 'object',
			properties: {
				first_name: {
					type: 'string',
					description: 'Please enter your full name.',
				},
				middle_name: {
					type: 'string',
					description: 'Please enter your full name.',
				},
				last_name: {
					type: 'string',
					description: 'Please enter your full name.',
				},
			},
		},
		address: {
			type: 'object',
			properties: {
				street_1: {
					type: 'string',
					description: 'Please enter your full address.',
				},
				street_2: {
					type: 'string',
					description: 'Please enter your full address.',
				},
				city: {
					type: 'string',
					description: 'Please enter your full address.',
				},
				state: {
					type: 'string',
					description: 'Please enter your full address.',
				},
				zip: {
					type: 'string',
					description: 'Please enter your full address.',
				},
			},
		},
		contactNumber: {
			type: 'object',
			properties: {
				phone_number: {
					type: 'string',
				},
				typeOfContact: {
					oneOf: [
						{
							type: 'string',
							enum: ['home', 'work', 'mobile'],
						},
					],
				},
			},
		},
		date_of_birth: {
			type: 'string',
			format: 'date',
			description: 'Please enter your date of birth.',
		},
	},
}
