import axios from 'axios';
import { getUserDetails } from '../util/GetUser';

const SERVER_URL = 'http://localhost:5000/api/hotel';
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
const getHotles = () => {
  return axios.get(SERVER_URL + '/get-all-hotels', authHeaders());
};

const HotelServices = {
  addHotel,
  getHotles,
};

export default HotelServices;
