import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import HotelCard from './HotelCard'; // Adjust the import path as necessary
import HotelServices from '../services/HotelServices'; // Adjust the import path as necessary
import { motion } from 'framer-motion';
import { getUserDetails } from '../util/GetUser';
import { getErrorMessage } from '../util/GetError';
import HotelModal from '../utils/HotelModal';

const HotelsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nomHotel, setNomHotel] = useState('');
  const [adresseHotel, setAdresseHotel] = useState('');
  const [emailHotel, setEmailHotel] = useState('');
  const [telephoneHotel, setTelephoneHotel] = useState('');
  const [priceHotel, setPriceHotel] = useState('');
  const [deviceHotel, setDeviceHotel] = useState('F XOF'); // Default currency
  const [imageHotel, setImageHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allHotels, setAllHotels] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  const clearInputs = () => {
    setNomHotel('');
    setAdresseHotel('');
    setEmailHotel('');
    setTelephoneHotel('');
    setPriceHotel('');
    setDeviceHotel('F XOF');
    setImageHotel(null);
    setImagePreview(null);
  };

  const handleCloseModal = () => {
    clearInputs();
    handleToggleModal();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageHotel(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const userId = getUserDetails()?.userId;
    if (!userId) {
      message.error(
        'L’ID de l’utilisateur est manquant. Veuillez vous reconnecter.'
      );
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('nomHotel', nomHotel);
    formData.append('adresseHotel', adresseHotel);
    formData.append('emailHotel', emailHotel);
    formData.append('telephoneHotel', telephoneHotel);
    formData.append('priceHotel', priceHotel);
    formData.append('deviceHotel', deviceHotel);
    formData.append('addedBy', userId);
    if (imageHotel) formData.append('imageHotel', imageHotel);

    try {
      const response = await HotelServices.addHotel(formData);
      message.success("L'hôtel a été ajouté avec succès");
      clearInputs();
      handleCloseModal();
      fetchAllHotels();
    } catch (error) {
      message.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const fetchAllHotels = async () => {
    const user = getUserDetails();
    if (!user?.userId) return;

    try {
      const response = await HotelServices.getHotles(user.userId);
      setAllHotels(response.data);
    } catch (error) {
      message.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    fetchAllHotels();
  }, []); // Dependency array is empty to run only once on component mount

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between bg-white shadow fixed mt-[61px] w-[80vw] max-lg:w-[100vw] max-w-7xl max-lg:pe-8 pe-8 z-30">
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
      <div className="pt-40">
        {allHotels.length > 0 ? (
          <div className="hotelCards">
            <HotelCard />
          </div>
        ) : (
          <div className="text-center flex items-center justify-center h-[78vh]">
            <p className="text-4xl text-gray-600">
              Il n'y a pas d'hôtels ajoutés.
            </p>
          </div>
        )}
      </div>
      <HotelModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        nomHotel={nomHotel}
        setNomHotel={setNomHotel}
        adresseHotel={adresseHotel}
        setAdresseHotel={setAdresseHotel}
        emailHotel={emailHotel}
        setEmailHotel={setEmailHotel}
        telephoneHotel={telephoneHotel}
        setTelephoneHotel={setTelephoneHotel}
        priceHotel={priceHotel}
        setPriceHotel={setPriceHotel}
        deviceHotel={deviceHotel}
        setDeviceHotel={setDeviceHotel}
        imagePreview={imagePreview}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </motion.div>
  );
};

export default HotelsList;
