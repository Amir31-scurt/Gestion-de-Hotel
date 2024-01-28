import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../util/GetUser';
import HotelServices from '../services/HotelServices';
import { message } from 'antd';
import { getErrorMessage } from '../util/GetError';
import HotelEditModal from '../utils/HotelEditModal';
import ConfirmationModal from '../utils/ConfirmationModal';
import DetailsModal from '../utils/DetailsModal';
import { MdMoreVert } from 'react-icons/md';

export default function HotelCard({ hotel }) {
  const [allHotels, setAllHotels] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage dropdown visibility
  const serverUrl = 'https://server-hotel-gest.onrender.com';
  // Confirmation de suppression
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  // Details de l'hotel
  const [selectedHotelDetails, setSelectedHotelDetails] = useState(null);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  // Modifier un hotel
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedHotelForEdit, setSelectedHotelForEdit] = useState(null);

  let user = getUserDetails();
  const getAllHotels = async () => {
    try {
      const response = await HotelServices.getHotles(user?.userId);
      setAllHotels(response.data);
    } catch (err) {
      console.log(err);
      message.error(getErrorMessage(err));
    }
  };
  useEffect(() => {
    if (user && user?.userId) {
      getAllHotels();
    }
  }, []);

  const toggleDropdown = (hotelId) => {
    if (openDropdown === hotelId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(hotelId);
    }
  };

  const handleDelete = async (hotelId) => {
    try {
      const response = await HotelServices.deleteHotel(hotelId);
      message.success(`L'hôtel a été supprimé avec succès`);
      setIsConfirmModalOpen(false);
      getAllHotels();
    } catch (error) {
      console.log(error);
      message.error(getErrorMessage(error));
    }
  };

  // Deails de l'hotel
  const openDetailsModal = (hotelDetails) => {
    setSelectedHotelDetails(hotelDetails);
    setIsDetailsModalOpen(true);
    toggleDropdown(false);
  };
  // Confirmation de suppression
  const openConfirmModal = (hotelId) => {
    setSelectedHotelId(hotelId);
    setIsConfirmModalOpen(true);
    toggleDropdown(false);
  };

  // Modification
  const openEditModal = (hotelData) => {
    setSelectedHotelForEdit(hotelData);
    setIsEditModalOpen(true);
    toggleDropdown(false);
  };

  return (
    <div>
      <div className="grid grid-cols-4 items-stretch flex flex-col gap-4 w-full max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-2 mb-20 mt-5 px-4 cardHotelFront">
        {allHotels.map((hotel) => (
          <div
            key={hotel?._id}
            className="flex flex-col rounded-md shadow bg-white crd"
          >
            <div className="img-card relative">
              <img
                src={`${serverUrl}/api/uploads/${hotel?.imageHotel}`}
                className="hotel-image rounded-t"
                alt="Hotel Image"
              />
              <button
                className="dropdown-button absolute top-0 right-0 m-3 bg-white p-2 rounded"
                onClick={() => toggleDropdown(hotel?._id)}
              >
                <MdMoreVert />
              </button>
              <ConfirmationModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={() => handleDelete(selectedHotelId)}
                message="Etes-vous sûr de vouloir supprimer cet hôtel ?"
              />
              <DetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                hotelDetails={selectedHotelDetails}
              />
              <HotelEditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                hotelData={selectedHotelForEdit}
              />
              {openDropdown === hotel?._id && (
                <div
                  id="dropdown"
                  className="dropdown z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 right-3"
                >
                  <ul
                    className="py-2 cursor-pointer"
                    aria-labelledby="dropdownButton"
                  >
                    <li>
                      <span
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
                        onClick={() => openDetailsModal(hotel)}
                      >
                        Voir les détails
                      </span>
                    </li>

                    <li>
                      <span
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => openEditModal(hotel)}
                      >
                        Modifier
                      </span>
                    </li>
                    <li>
                      <span
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => openConfirmModal(hotel._id)}
                      >
                        Supprimer
                      </span>
                    </li>
                  </ul>
                </div>
              )}
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
        ))}
      </div>
    </div>
  );
}
