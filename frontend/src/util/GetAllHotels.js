import { message } from 'antd';
import HotelServices from '../services/HotelServices';
import { getErrorMessage } from './GetError';
import { useState } from 'react';

export default function GetAllHotels() {
  const [allHotels, setAllHotels] = useState([]);
  const getAllHotels = async () => {
    try {
      const response = await HotelServices.getHotles();
      setAllHotels(response.data);
    } catch (err) {
      console.log(err);
      message.error(getErrorMessage(err));
    }
  };
  getAllHotels();
}
