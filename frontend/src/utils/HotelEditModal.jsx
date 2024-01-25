import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
// import { AiFillPicture } from 'react-icons/ai';
import { Bars } from 'react-loader-spinner'; // Import Bars from react-loader-spinner if you are using it for loading
import { motion } from 'framer-motion';
import HotelServices from '../services/HotelServices';
import { message } from 'antd';
import { getErrorMessage } from '../util/GetError';

export default function HotelEditModal({ isOpen, onClose, hotelData }) {
  // Initialize states for each field
  const [nomHotel, setNomHotel] = useState('');
  const [adresseHotel, setAdresseHotel] = useState('');
  const [emailHotel, setEmailHotel] = useState('');
  const [telephoneHotel, setTelephoneHotel] = useState('');
  const [priceHotel, setPriceHotel] = useState('');
  const [deviceHotel, setDeviceHotel] = useState('F XOF');
  const [loading, setLoading] = useState(false);

  // Handle file change for photo upload
  // const handleFileChange = (event) => {

  // };

  // Set initial values when the modal opens
  useEffect(() => {
    if (hotelData) {
      setNomHotel(hotelData.nomHotel);
      setAdresseHotel(hotelData.adresseHotel);
      setEmailHotel(hotelData.emailHotel);
      setTelephoneHotel(hotelData.telephoneHotel);
      setPriceHotel(hotelData.priceHotel);
      setDeviceHotel(hotelData.deviceHotel);
    }
  }, [hotelData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        nomHotel: nomHotel,
        adresseHotel: adresseHotel,
        emailHotel: emailHotel,
        telephoneHotel: telephoneHotel,
        priceHotel: priceHotel,
        deviceHotel: deviceHotel,
      };
      const response = await HotelServices.updateHotel(hotelData?._id, data);
      message.success(
        `L'hôtel ${hotelData?.nomHotel} a été modifié avec succès`
      );
      setLoading(false);
      onClose(onClose);
    } catch (error) {
      console.error(error);
      setLoading(false);

      message.error(getErrorMessage(error));
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-30 overflow-y-auto h-full w-full flex items-center z-50"
    >
      <div className="mx-auto p-5 border w-[700px] max-md:w-[600px] shadow-lg rounded-md bg-white max-md:h-5/6 max-md:overflow-y-scroll">
        <div className="mt-3">
          <div className="headerr flex items-center gap-3 border-b-[3px] pb-5 mx-7 border-dotted">
            <button onClick={onClose}>
              <FaArrowLeft />
            </button>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Modifier l'hôtel
            </h3>
          </div>
          <div className="mt-2 px-7 py-3">
            <form onSubmit={handleSubmit}>
              {/* Hotel Name Input */}
              <div className="flex max-md:flex-col justify-between gap-5">
                <div className="mb-4 flex flex-col gap-2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="hotelName"
                  >
                    Nom de l'hôtel
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="hotelName"
                    type="text"
                    value={nomHotel}
                    onChange={(e) => setNomHotel(e.target.value)}
                  />
                </div>

                {/* Hotel Address Input */}
                <div className="mb-4 flex flex-col w-full gap-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="hotelAddress"
                  >
                    Adresse
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="hotelAddress"
                    type="text"
                    value={adresseHotel}
                    onChange={(e) => setAdresseHotel(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex max-md:flex-col justify-between gap-5">
                <div className="mb-4 flex flex-col gap-2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="mail"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mail"
                    type="text"
                    value={emailHotel}
                    onChange={(e) => setEmailHotel(e.target.value)}
                  />
                </div>

                {/* Phone Number Input */}
                <div className="mb-4 flex flex-col w-full gap-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Numéro de téléphone
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    value={telephoneHotel}
                    onChange={(e) => setTelephoneHotel(e.target.value)}
                  />
                </div>
              </div>

              {/* Price per Night Input */}
              <div className="flex max-md:flex-col justify-between gap-5">
                <div className="mb-4 flex flex-col gap-2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="nightPrice"
                  >
                    Prix par nuit
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nightPrice"
                    type="text"
                    value={priceHotel}
                    onChange={(e) => setPriceHotel(e.target.value)}
                  />
                </div>

                {/* Currency Select */}
                <div className="mb-4 flex flex-col w-full gap-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="currency"
                  >
                    Devise
                  </label>
                  <select
                    className="block w-full bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
                    id="currency"
                    value={deviceHotel}
                    onChange={(e) => setDeviceHotel(e.target.value)}
                  >
                    <option value="F XOF">F XOF</option>
                    <option value="Euro">Euro</option>
                    <option value="Dollar">Dollar</option>
                  </select>
                </div>
              </div>

              {/* Photo Upload Input */}
              {/* <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="photo"
                >
                  Ajouter une photo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-44 border-2 rounded hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center text-gray-400 justify-center h-full">
                      <AiFillPicture className="text-4xl" />
                      <p className="p-0 m-0">Ajouter une photo</p>
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      id="photo"
                      name="imageHotel"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                </div>
              </div> */}

              {/* Submit Button */}
              <div className="flex items-center justify-end mt-4">
                <button
                  type="submit"
                  className="bg-neutral-600 text-white active:bg-neutral-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex gap-3 items-center">
                      <Bars
                        height="25"
                        width="25"
                        color="#fff"
                        ariaLabel="bars-loading"
                        visible={true}
                      />
                      <p>Chargement...</p>
                    </div>
                  ) : (
                    'Mettre à jour'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
