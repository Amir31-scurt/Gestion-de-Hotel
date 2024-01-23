import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { AiFillPicture } from 'react-icons/ai';
import HotelCard from './HotelCard';
import { getErrorMessage } from '../util/GetError';
import { message } from 'antd';
import HotelServices from '../services/HotelServices';
import { getUserDetails } from '../util/GetUser';
import { Bars } from 'react-loader-spinner';

export default function HotelsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nomHotel, setNomHotel] = useState('');
  const [adresseHotel, setAdresseHotel] = useState('');
  const [emailHotel, setEmailHotel] = useState('');
  const [telephoneHotel, setTelephoneHotel] = useState('');
  const [priceHotel, setPriceHotel] = useState('');
  const [deviceHotel, setDeviceHotel] = useState('');
  const [imageHotel, setImageHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allHotels, setAllHotels] = useState([]);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCloseModal = () => {
    handleToggleModal();
    setNomHotel('');
    setAdresseHotel('');
    setEmailHotel('');
    setTelephoneHotel('');
    setPriceHotel('');
    setDeviceHotel('');
    setImageHotel('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('nomHotel', nomHotel);
    formData.append('adresseHotel', adresseHotel);
    formData.append('emailHotel', emailHotel);
    formData.append('telephoneHotel', telephoneHotel);
    formData.append('priceHotel', priceHotel);
    formData.append('deviceHotel', deviceHotel);
    if (imageHotel) {
      formData.append('imageHotel', imageHotel);
    }

    try {
      const response = await HotelServices.addHotel(formData);
      console.log(response.data);
      message.success("L'hôtel a été ajouté avec succès");

      // Vider les champs
      setNomHotel('');
      setAdresseHotel('');
      setEmailHotel('');
      setTelephoneHotel('');
      setPriceHotel('');
      setDeviceHotel('');
      setImageHotel('');

      //  Fermer le modal
      handleToggleModal();
    } catch (err) {
      console.error(err);
      message.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageHotel(file);
  };

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
      <div className="flex items-center justify-between bg-white shadow fixed mt-[61px] w-[80vw] max-lg:w-[100vw] max-w-7xl max-lg:pe-8 pe-8">
        <div className="flex items-center gap-2 max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-2xl text-gray-900">
            Hôtels{' '}
            <span className="text-2xl text-gray-500">{allHotels.length}</span>
          </p>
        </div>
        <button
          className="font-medium px-4 border-2 rounded-lg p-2 hover:opacity-50"
          type="button"
          onClick={handleToggleModal}
        >
          + Créer un nouveau hôtel
        </button>
      </div>
      <div className="hotelCards pt-40">
        <HotelCard />
      </div>
      <div className="text-start">
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center">
            <div className="mx-auto p-5 border w-[700px] max-md:w-[600px] shadow-lg rounded-md bg-white max-md:h-5/6 max-md:overflow-y-scroll">
              <div className="mt-3">
                <div className="headerr flex items-center gap-3 border-b-[3px] pb-5 mx-7 border-dotted">
                  <button onClick={handleCloseModal}>
                    <FaArrowLeft />
                  </button>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Créer un nouveau hôtel
                  </h3>
                </div>
                <div className="mt-2 px-7 py-3">
                  <div>
                    {/* ... */}
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
                      <div className="mb-4 flex flex-col w-full gap-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="hotelAddress"
                        >
                          Devise
                        </label>
                        <select
                          className="block w-full bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
                          id="currency"
                          value={deviceHotel}
                          onChange={(e) => setDeviceHotel(e.target.value)}
                        >
                          <option>F XOF</option>
                          <option>Euro</option>
                          <option>Dollar</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
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
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <button
                        type="submit"
                        className="bg-neutral-600 text-white active:bg-neutral-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 flex items-center justify-center flex gap-3"
                        disabled={loading} // Disable button when loading
                        onClick={handleSubmit}
                      >
                        {loading && (
                          <Bars
                            height="25"
                            width="25"
                            color="#fff"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                        )}
                        {loading ? 'Chargement...' : 'Enregistrer'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
