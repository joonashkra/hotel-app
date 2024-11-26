import axios from 'axios'
const baseUrl = '/api/rooms'

let authToken

const setToken = newToken => {
  authToken = `Bearer ${newToken}`
}

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
    const config = {
        headers: { Authorization: authToken }
    }

    try {
        const response = await axios.post(baseUrl, newRoom, config)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const update = (id, updatedRoom) => {

    const config = {
        headers: { Authorization: authToken }
    }


    try {
        const response = axios.put(`${baseUrl}/${id}`, updatedRoom, config)
        return response.then(response => response.data)
    } 
    catch (error) {
        return error
    }
}

const remove = async id => {
    const config = {
        headers: { Authorization: authToken }
    }


    try {
        const response = await axios.delete(`${baseUrl}/${id}`, config)
        return response.data
    } 
    catch (error) {
        return error
    }
}

export default { getAll, getById, create, update, remove, setToken }