// ConfirmationModal.js

import React from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  message,
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex overflow-y-auto overflow-x-hidden z-[100] justify-center items-center backdrop-blur-sm shadow"
    >
      <div className="relative p-4 w-full max-w-md max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 text-xl end-2.5"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
          <div className="p-4 md:p-5 text-center">
            <div className="flex justify-center text-7xl text-red-600 mb-4">
              <IoAlertCircleOutline />
            </div>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              {message}
            </h3>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                className="text-white p-3 rounded bg-red-600 hover:bg-red-800 ..."
                onClick={onConfirm}
              >
                Oui, je suis sûre
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white p-3 rounded hover:bg-black hover:text-white outline outline-black outline-1 ..."
                onClick={onClose}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
