import axios from 'axios'
import { apiEndpoint } from '../const'

export const createWorkshop = (workshop: any) => axios.post(apiEndpoint + '/workshop', workshop)