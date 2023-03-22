import axios from 'axios'
import API_URL from './api_url'

export const evaAPIGetAll = async (route) => {
	const getAll = await axios.get(`${API_URL}/${route}/`)
	return getAll.data
}
export const evaAPIGetItem = async (route, id) => {
	const getItem = await axios.get(`${API_URL}/${route}/${id}`)
	console.log(getItem.data)
	return getItem.data
}

//update specific item in route (route, id, item)
export const evaAPIPutItem = async (route, id, item) => {
	const putItem = await axios.put(`${API_URL}/${route}/${id}/`, item)
	console.log(putItem.data)
	return putItem.data
}
/*return patients
        .then((response) => {
            console.log(response)
            response.data
        })
        .catch((error) => console.log(error))*/
