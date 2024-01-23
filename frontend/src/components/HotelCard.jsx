import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../util/GetUser';
import HotelServices from '../services/HotelServices';
import { message } from 'antd';
import { getErrorMessage } from '../util/GetError';

export default function HotelCard() {
  const [allHotels, setAllHotels] = useState([]);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    let user = getUserDetails();
    const getAllHotels = async () => {
      try {
        const response = await HotelServices.getHotles();
        console.log(response.data);
        setAllHotels(response.data);
      } catch (err) {
        console.log(err);
        message.error(getErrorMessage(err));
      }
    };
    if (user) {
      getAllHotels();
    } else {
      console.log('Une erreur est survenue');
    }
  }); // Empty dependency array to run only once

  return (
    <div>
      <div className="grid grid-cols-4 items-stretch flex flex-col gap-4 w-full max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-2 mb-20 mt-5 px-4">
        {allHotels.map((hotel) => {
          return (
            <div
              key={hotel?._id}
              className="flex flex-col rounded-md shadow bg-white crd"
            >
              <div className="img-card">
                <img
                  src={`${serverUrl}/api/uploads/${hotel?.imageHotel}`}
                  className="object-contain object-center overflow-hidden rounded-t-md"
                  alt="Hotel Image"
                />
              </div>
              <div className="flex flex-col items-stretch ml-3.5 my-6 self-start">
                <header className="text-yellow-800 text-sm leading-4">
                  {hotel?.adresseHotel}
                </header>
                <h1 className="text-neutral-800 text-2xl font-semibold leading-6 whitespace-nowrap mt-2">
                  {hotel?.nomHotel}
                </h1>
                <p className="text-neutral-800 font-bold text-sm leading-4 mt-7">
                  {hotel?.priceHotel} {hotel?.deviceHotel} par nuit
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
