import axios from 'axios'
const baseUrl = '/api/rooms'

const getAll = async () => {
    try {
        const request = await axios.get(baseUrl)
        return request.data
    } 
    catch (error) {
        return error
    }
}

const getById = async (id) => {
    try {
        const request = await axios.get(`${baseUrl}/${id}`)
        return request.data
    } 
    catch (error) {
        return error
    }
}

const create = async newRoom => {
    try {
        const request = await axios.post(baseUrl, newRoom)
        return request.data
    } 
    catch (error) {
        return error
    }
}

const update = (id, updatedRoom) => {
    try {
        const request = axios.put(`${baseUrl}/${id}`, updatedRoom)
        return request.then(response => response.data)
    } 
    catch (error) {
        return error
    }
}

const remove = async id => {
    try {
        const request = await axios.delete(`${baseUrl}/${id}`)
        return request.data
    } 
    catch (error) {
        return error
    }
}

export default { getAll, getById, create, update, remove }