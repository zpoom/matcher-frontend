import axios from 'axios'
import { apiEndpointOf } from '../const'

export const getAllWorkshops = async () => (await axios.get(apiEndpointOf('/workshops'))).data
export const createWorkshop = (workshop: any) => axios.post(apiEndpointOf('/workshop'), workshop)
export const deleteWorkshop = (id: string) => axios.delete(apiEndpointOf(`/workshop/${id}`))
export const getWorkshopById = async (id: string) => (await axios.get(apiEndpointOf(`/workshop/${id}`))).data