export function patients(state = [], action) {
	switch (action.type) {
		case 'LOAD_PATIENTS':
			return action.patients
		default:
			return state
	}
}

export function forms(state = [], action) {
	switch (action.type) {
		case 'LOAD_ALL_FORMS':
			return action.forms
		default:
			return state
	}
}

export function appointments(state = [], action) {
	switch (action.type) {
		case 'LOAD_APPOINTMENTS':
			return action.appointments
		default:
			return state
	}
}

export function requests(state = [], action) {
	switch (action.type) {
		case 'LOAD_REQUESTS':
			return action.requests
		default:
			return state
	}
}
