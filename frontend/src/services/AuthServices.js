import axios from 'axios';

const SERVER_URL = 'https://gestion-de-hotel.vercel.app/Gestion_Hotel/'; // Adjusted to point to the /api directory

const registerUser = (data) => {
  return axios.post(`${SERVER_URL}/register`, data); // Removed the extra slash
};

const loginUser = (data) => {
  return axios.post(`${SERVER_URL}/login`, data); // Removed the extra slash
};

const forgotPassword = (data) => {
  return axios.post(`${SERVER_URL}/forgotPassword`, data); // Removed the extra slash
};

const resetPassword = ({ id, token, password }) => {
  return axios.post(`${SERVER_URL}/resetPassword/${id}/${token}`, { password });
};

const AuthServices = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
};

export default AuthServices;
