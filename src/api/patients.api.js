import axios from 'axios'
import API_URL from './api_url'

export const getAllPatients = () => axios.get(`${API_URL}/patients`)
