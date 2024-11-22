import axios from 'axios'
const baseUrl = '/api/bookings'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    } 
    catch (error) {
        return error
    }
}

const create = async newBooking => {
    try {
        const response = await axios.post(baseUrl, newBooking)
        console.log('bookings.js:',  response.data)
        return response.data
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

export default { getAll, create, remove }