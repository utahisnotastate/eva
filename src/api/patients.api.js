import axios from 'axios'
import API_URL from './api_url'

export const getAllPatients = async () => {
	const patients = await axios.get(`${API_URL}/patients/`)
	console.log(patients.data)
	return patients

	/*return patients
		.then((response) => {
			console.log(response)
			response.data
		})
		.catch((error) => console.log(error))*/
}
