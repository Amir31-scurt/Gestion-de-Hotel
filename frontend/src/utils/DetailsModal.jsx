// ConfirmationModal.js

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function DetailsModal({ isOpen, onClose, hotelDetails }) {
  if (!isOpen) return null;
  const serverUrl = 'https://server-hotel-gest.onrender.com';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gray-600 flex bg-opacity-30 overflow-y-auto overflow-x-hidden z-[100] justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow flex flex-col">
          <button
            type="button"
            className="absolute top-3 text-xl end-2.5"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
          <div className="p-5">
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-3 text-lg font-normal text-gray-500">
                Hôtel: <strong>{hotelDetails?.nomHotel}</strong>
              </h3>
            </div>
            <hr />
            <div className="img">
              <img
                src={`${serverUrl}/api/uploads/${hotelDetails?.imageHotel}`}
                className="hotel-image rounded-t"
                alt="Hotel Image"
              />
            </div>
            <div className="text-xl flex flex-col gap-5 my-5">
              <p>
                <strong>Adresse:</strong> {hotelDetails?.adresseHotel}
              </p>
              <p>
                <strong>E-mail :</strong> {hotelDetails?.emailHotel}
              </p>
              <p>
                <strong>Numéro de téléphone:</strong>{' '}
                {hotelDetails?.telephoneHotel}
              </p>
              <p>
                <strong>Prix :</strong> {hotelDetails?.priceHotel}{' '}
                {hotelDetails?.deviceHotel} par nuit
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-xl p-2 text-white mb-4 me-4 bg-gray-500 w-fit rounded"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
