import axios from 'axios'
import API_URL from './api_url'

export const getFullPatientInformation = async (patientId) => {
	const basic_information = await axios.get(`${API_URL}/patients/${patientId}/`)
	console.log(basic_information.data)
	return basic_information
}
