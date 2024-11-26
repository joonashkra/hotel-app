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

const create = async newBooking => {
    const config = {
        headers: { Authorization: authToken }
    }

    try {
        const response = await axios.post(baseUrl, newBooking, config)
        return response.data
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

export default { getAll, create, remove, setToken }