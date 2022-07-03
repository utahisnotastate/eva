import { combineReducers } from 'redux'
import {
	patients,
	forms,
	appointments,
	requests,
} from './reducers/patients.reducers'
import { formbuilder } from './reducers/formbuilder.reducers'

const rootReducer = combineReducers({
	patients,
	forms,
	appointments,
	requests,
	formbuilder,
})

export default rootReducer
