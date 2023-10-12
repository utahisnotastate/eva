import API_URL from './api_url'
import axios from 'axios'

//get patient with specific id via axios and api
export const getPatient = async (id) => {
	const result = await axios(`${API_URL}/patients/${id}/`)
	return result.data
}

export const getPatients = async () => {
	const result = await axios(`${API_URL}/patients/`)
	return result.data
}

export const getRequests = async () => {
	const result = await axios(`${API_URL}/requests/`)
	return result.data
}

export const getProviders = async () => {
	const result = await axios(`${API_URL}/providers/`)
	return result.data
}

export const getAppointments = async () => {
	const result = await axios(`${API_URL}/appointments/`)
	return result.data
}

//save appointment with specific id via axios and api

export const saveAppointment = async (id, appointment) => {
	const result = await axios.post(
		`${API_URL}/appointments/${id}/`,
		appointment
	)
	return result.data
}

export const getAllData = async () => {
	try {
		const [patients, appointments, requests, providers] = await Promise.all(
			[getPatients(), getAppointments(), getRequests(), getProviders()]
		)

		return {
			patients,
			appointments,
			requests,
			providers,
		}
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}
