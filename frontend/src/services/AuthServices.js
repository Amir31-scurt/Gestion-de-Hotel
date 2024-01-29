import axios from 'axios';

const SERVER_URL = 'https://server-hotel-gest.onrender.com/';

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
  return axios.post(`${SERVER_URL}api/resetPassword/${id}/${token}`, {
    password,
  });
};
const logoutUser = () => {
  const userJson = localStorage.getItem('User');
  const user = JSON.parse(userJson);
  const token = user?.token;
  return axios.post(
    SERVER_URL + 'api/logout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const AuthServices = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  logoutUser,
};

export default AuthServices;
