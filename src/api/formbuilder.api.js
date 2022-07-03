import axios from 'axios'
import API_URL from './api_url'

export const updatePhysicalExamForm = async (form) => {
	const response = await axios.put(`${API_URL}/forms/`, form)
	console.log(response.data)
	return response.data
}
