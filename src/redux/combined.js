import { combineReducers } from 'redux'
import {
	patients,
	forms,
	appointments,
	providers,
	requests,
} from './reducers/patients.reducers'
import { formbuilder } from './reducers/formbuilder.reducers'

const rootReducer = combineReducers({
	patients,
	providers,
	forms,
	appointments,
	requests,
	formbuilder,
})

export default rootReducer
