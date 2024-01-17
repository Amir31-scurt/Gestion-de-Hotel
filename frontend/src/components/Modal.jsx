import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import 'rsuite/dist/rsuite.min.css';
import { Modal as RSuiteModal } from 'rsuite';

const Modal = ({ open, isOpen }) => {
  const [backdrop, setBackdrop] = useState('static');
  const handleClose = () => isOpen(false);
  return (
    <RSuiteModal
      backdrop={backdrop}
      keyboard={false}
      show={open}
      onHide={handleClose}
    >
      <Modal.Header>
        <Modal.Title>
          <div className="font-bold flex items-center gap-3">
            <FaArrowLeft />
            <p className="p-0 m-0">Créer un nouveau hôtel</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex justify-between gap-5">
          <div className="mb-4 flex flex-col gap-2 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="hotelName"
            >
              Nom de l'hôtel
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hotelName"
              type="text"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hotelAddress"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="mb-4 flex flex-col gap-2 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mail"
            >
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mail"
              type="text"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="mb-4 flex flex-col gap-2 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nightPrice"
            >
              Prix par nuit
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nightPrice"
              type="text"
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
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus
:outline-none focus:shadow-outline"
              id="currency"
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
            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                {/* Icon and Text */}
              </div>
              <input type="file" className="opacity-0" id="photo" />
            </label>
          </div>
        </div>
        {/* {previews &&
            previews.map((pic, idx) => (
              <div key={idx} className="d-flex m-3">
                <img src={pic} className="output" alt="Preview" />
              </div>
            ))} */}
      </Modal.Body>
      <Modal.Footer>
        <div className="flex items-end justify-end">
          <button
            className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enregistrer
          </button>
        </div>
      </Modal.Footer>
    </RSuiteModal>
  );
};

export default RSuiteModal;
