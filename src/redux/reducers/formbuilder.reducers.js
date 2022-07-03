const initformbuilderstate = {
	title: '',
	description: '',
	new_type: '',
	fields: [],
}
export function formbuilder(state = initformbuilderstate, action) {
	switch (action.type) {
		case 'LOAD_FORM':
			return action.form
		default:
			return state
	}
}
