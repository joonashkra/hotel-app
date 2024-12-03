import axios from 'axios'
const baseUrl = '/api/users'

let authToken

const setToken = newToken => {
  authToken = `Bearer ${newToken}`
}

const login = async credentials => {
    try {
        const response = await axios.post(`${baseUrl}/login`, credentials)
        return response.data
    } catch (error) {
        return error
    }
}

const loginStaff = async credentials => {
    try {
        const response = await axios.post(`${baseUrl}/login/staff`, credentials)
        return response.data
    } catch (error) {
        return error
    }
}

const create = async newUser => {
    const config = {
        headers: { Authorization: authToken }
    }

    try {
        const response = await axios.post(baseUrl, newUser, config)
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

export default { create, remove, login, setToken, loginStaff }