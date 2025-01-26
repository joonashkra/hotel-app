import axios from "axios";
const baseUrl = "/api/bookings";

let authToken;

const setToken = (newToken) => {
  authToken = `Bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.get(baseUrl, config);
  return response.data;
};

const getById = async (id) => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.get(`${baseUrl}/${id}`, config);
  return response.data;
};

const create = async (newBooking) => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.post(baseUrl, newBooking, config);
  return response.data;
};

const update = async (id, updatedBooking) => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.put(`${baseUrl}/${id}`, updatedBooking, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default { getAll, getById, create, remove, setToken, update };
