import axios from 'axios'
const baseUrl = '/api/bookings'

let authToken

const setToken = newToken => {
  authToken = `Bearer ${newToken}`
}

const getAll = async () => {
    const config = {
        headers: { Authorization: authToken }
    }

    try {
        const response = await axios.get(baseUrl, config)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const getById = async (id) => {
    const config = {
        headers: { Authorization: authToken }
    }

    try {
        const response = await axios.get(`${baseUrl}/${id}`, config)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const create = async newBooking => {
    const config = {
        headers: { Authorization: authToken }
    }

    try {
        const response = await axios.post(baseUrl, newBooking, config)
        return response.data
      } catch (error) {
        console.error(error)
        throw error
      }
}

const update = (id, updatedBooking) => {

    const config = {
        headers: { Authorization: authToken }
    }


    try {
        const response = axios.put(`${baseUrl}/${id}`, updatedBooking, config)
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

export default { getAll, getById, create, remove, setToken, update }