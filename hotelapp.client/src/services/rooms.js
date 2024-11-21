import axios from 'axios'
const baseUrl = '/api/rooms'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const getById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const create = async newRoom => {
    try {
        const response = await axios.post(baseUrl, newRoom)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const update = (id, updatedRoom) => {
    try {
        const response = axios.put(`${baseUrl}/${id}`, updatedRoom)
        return response.then(response => response.data)
    } 
    catch (error) {
        return error
    }
}

const remove = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response.data
    } 
    catch (error) {
        return error
    }
}

export default { getAll, getById, create, update, remove }