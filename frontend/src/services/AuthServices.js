import axios from 'axios';

const SERVER_URL = 'https://gestion-de-hotel-x54i.vercel.app/';

const registerUser = (data) => {
  return axios.post(SERVER_URL + 'api/register', data);
};
const loginUser = (data) => {
  return axios.post(SERVER_URL + 'api/login', data);
};

const forgotPassword = (data) => {
  return axios.post(SERVER_URL + 'api/forgotPassword', data);
};
const resetPassword = ({ id, token, password }) => {
  return axios.post(`${SERVER_URL}/api/resetPassword/${id}/${token}`, {
    password,
  });
};

const AuthServices = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
};

export default AuthServices;
