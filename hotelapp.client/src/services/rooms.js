import axios from 'axios'
const baseUrl = '/api/rooms'

let authToken

const setToken = newToken => {
  authToken = `Bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getById = async id => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const create = async newRoom => {
    const config = {
        headers: { Authorization: authToken }
    }

    const response = await axios.post(baseUrl, newRoom, config)
    return response.data
}

const update = async (id, updatedRoom) => {
    const config = {
        headers: { Authorization: authToken }
    }

    const response = await axios.put(`${baseUrl}/${id}`, updatedRoom, config)
    return response.data
}

const remove = async id => {
    const config = {
        headers: { Authorization: authToken }
    }

    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

export default { getAll, getById, create, update, remove, setToken }