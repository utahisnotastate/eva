import axios from 'axios'
import API_URL from './api_url'

export const evaAPIGetAll = async (route) => {
	const getAll = await axios.get(`${API_URL}/${route}/`)
	console.log(getAll.data)
	return getAll.data

	/*return patients
        .then((response) => {
            console.log(response)
            response.data
        })
        .catch((error) => console.log(error))*/
}
