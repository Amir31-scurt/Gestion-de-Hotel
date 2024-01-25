import axios from 'axios';
import { getUserDetails } from '../util/GetUser';

const SERVER_URL = 'https://server-hotel-gest.onrender.com/api/hotel';

const addHotel = (data) => {
  return axios.post(SERVER_URL + '/add-Hotel', data, authHeaders());
};
const getHotles = () => {
  return axios.get(SERVER_URL + '/get-all-hotels', authHeaders());
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
