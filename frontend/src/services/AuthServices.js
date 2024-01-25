import axios from 'axios';

const SERVER_URL = 'https://gestion-de-hotel.vercel.app/';

const registerUser = (data) => {
  return axios.post(SERVER_URL + '/register', data);
};
const loginUser = (data) => {
  return axios.post(SERVER_URL + '/login', data);
};

const forgotPassword = (data) => {
  return axios.post(SERVER_URL + '/forgotPassword', data);
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
