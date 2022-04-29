import { combineReducers } from 'redux'
import {
	patients,
	forms,
	appointments,
	requests,
} from './reducers/patients.reducers'

const rootReducer = combineReducers({
	patients,
	forms,
	appointments,
	requests,
})

export default rootReducer
