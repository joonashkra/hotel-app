import axios from "axios";
const baseUrl = "/api/users";

let authToken;

const setToken = (newToken) => {
  authToken = `Bearer ${newToken}`;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

const loginStaff = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login/staff`, credentials);
  return response.data;
};

const create = async (newUser) => {
  const response = await axios.post(baseUrl, newUser);
  return response.data;
};

const createStaff = async (newUser) => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.post(`${baseUrl}/staff`, newUser, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: authToken },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default { create, remove, login, setToken, loginStaff, createStaff };
