import axios from 'axios';
import { getUserDetails } from '../util/GetUser';

const SERVER_URL = 'https://server-hotel-gest.onrender.com/api/hotel';

const authHeaders = () => {
  let userToken = getUserDetails()?.token;
  return {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
};

const addHotel = (data) => {
  return axios.post(SERVER_URL + '/add-Hotel', data, authHeaders());
};
const getHotles = (userId) => {
  return axios.get(`${SERVER_URL}/get-all-hotels/${userId}`, authHeaders());
};
const updateHotel = (id, data) => {
  return axios.put(`${SERVER_URL}/update-hotel/${id}`, data, authHeaders());
};
const deleteHotel = (id) => {
  return axios.delete(SERVER_URL + '/delete-hotel/' + id, authHeaders());
};

const HotelServices = {
  addHotel,
  getHotles,
  updateHotel,
  deleteHotel,
};

export default HotelServices;
