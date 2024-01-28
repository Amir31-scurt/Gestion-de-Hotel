import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Bars } from 'react-loader-spinner';

const HotelModal = ({
  isOpen,
  onClose,
  nomHotel,
  setNomHotel,
  adresseHotel,
  setAdresseHotel,
  emailHotel,
  setEmailHotel,
  telephoneHotel,
  setTelephoneHotel,
  priceHotel,
  setPriceHotel,
  deviceHotel,
  setDeviceHotel,
  imagePreview,
  handleFileChange,
  handleSubmit,
  loading,
}) => {
  if (!isOpen) return null;
  const isFormValid =
    nomHotel &&
    adresseHotel &&
    emailHotel &&
    telephoneHotel &&
    priceHotel &&
    deviceHotel &&
    imagePreview;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-30 overflow-y-auto h-full w-full flex items-center justify-center z-50"
    >
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center z-50">
        <div className="mx-auto p-5 border w-[700px] max-md:w-[600px] shadow-lg rounded-md bg-white max-md:h-5/6 max-md:overflow-y-scroll">
          <div className="mt-3">
            <div className="headerr flex items-center gap-3 border-b-[3px] pb-5 mx-7 border-dotted">
              <button onClick={onClose}>
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
                      className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
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
                      className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
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
                      className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                      htmlFor="mail"
                    >
                      E-mail
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      id="mail"
                      type="email"
                      value={emailHotel}
                      onChange={(e) => setEmailHotel(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 flex flex-col w-full gap-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
                      htmlFor="phoneNumber"
                    >
                      Numéro de téléphone
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phoneNumber"
                      type="tel"
                      value={telephoneHotel}
                      onChange={(e) => setTelephoneHotel(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex max-md:flex-col justify-between gap-5">
                  <div className="mb-4 flex flex-col gap-2 w-full">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
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
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-gray-400 justify-center h-full">
                          <AiFillPicture className="text-4xl" />
                          <p className="p-0 m-0">Ajouter une photo</p>
                        </div>
                      )}
                      <input
                        type="file"
                        className="opacity-0 absolute"
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
                    className={`bg-neutral-600 text-white active:bg-neutral-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 flex items-center justify-center ${
                      !isFormValid || loading ? 'cursor-not-allowed' : ''
                    }`}
                    disabled={!isFormValid || loading}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <div className="flex gap-3 items-center">
                        <Bars
                          height="25"
                          width="25"
                          color="#fff"
                          ariaLabel="bars-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                        <p>Chargement...</p>
                      </div>
                    ) : (
                      'Enregistrer'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelModal;
