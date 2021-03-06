import axios from 'axios';

export const api = process.env.REACT_APP_RECORDS_API_URL

export const getAll = () =>
    axios.get(`${api}/v1/records`)

export const create = (data) =>
    axios.post(`${api}/v1/records/`, data)

export const update = (id, data) =>
    axios.put(`${api}/v1/records/${id}`, data)

export const remove = (id) => 
    axios.delete(`${api}/v1/records/${id}`)
