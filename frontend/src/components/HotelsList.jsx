import React, { useState } from 'react';
import { Modal } from 'rsuite';
import { FaArrowLeft } from 'react-icons/fa6';
import 'rsuite/dist/rsuite.min.css';

export default function HotelsList() {
  const [open, isOpen] = useState(false);
  const [backdrop, setBackdrop] = useState('static');
  const handleAdd = () => {
    isOpen(true);
  };
  const handleClose = () => isOpen(false);
  return (
    <div>
      <div className="flex items-center justify-between bg-white shadow fixed mt-[55px] w-full max-w-7xl max-lg:pe-5 pe-20">
        <div className="flex items-center gap-2 max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-2xl text-gray-900">
            Hôtels <span className="text-2xl text-gray-500">8</span>
          </p>
        </div>
        <button
          className="font-bold border-2 rounded p-2"
          onClick={() => handleAdd()}
        >
          + Créer un nouveau hôtel
        </button>
      </div>
      <div className="hotelCards pt-40">
        <div className="grid grid-cols-4 items-stretch flex flex-col gap-4 w-full max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-2 mb-20 mt-5 px-4">
          <div className="flex flex-col rounded-md shadow bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed350d9710a993d1769669c69ab4352b39cdfa12297fb25eeb03f74ee63243f?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
              className="object-contain object-center overflow-hidden"
              alt="Hotel Image"
            />
            <div className="flex flex-col items-stretch ml-3.5 my-6 self-start">
              <header className="text-yellow-800 text-sm leading-4">
                Lac Rose, Dakar
              </header>
              <h1 className="text-neutral-800 text-2xl font-semibold leading-6 whitespace-nowrap mt-2">
                Hôtel Lac Rose
              </h1>
              <p className="text-neutral-800 font-bold text-sm leading-4 mt-7">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed350d9710a993d1769669c69ab4352b39cdfa12297fb25eeb03f74ee63243f?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
              className="object-contain object-center overflow-hidden"
              alt="Hotel Image"
            />
            <div className="flex flex-col items-stretch ml-3.5 my-6 self-start">
              <header className="text-yellow-800 text-sm leading-4">
                Lac Rose, Dakar
              </header>
              <h1 className="text-neutral-800 text-2xl font-semibold leading-6 whitespace-nowrap mt-2">
                Hôtel Lac Rose
              </h1>
              <p className="text-neutral-800 font-bold text-sm leading-4 mt-7">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed350d9710a993d1769669c69ab4352b39cdfa12297fb25eeb03f74ee63243f?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
              className="object-contain object-center overflow-hidden"
              alt="Hotel Image"
            />
            <div className="flex flex-col items-stretch ml-3.5 my-6 self-start">
              <header className="text-yellow-800 text-sm leading-4">
                Lac Rose, Dakar
              </header>
              <h1 className="text-neutral-800 text-2xl font-semibold leading-6 whitespace-nowrap mt-2">
                Hôtel Lac Rose
              </h1>
              <p className="text-neutral-800 font-bold text-sm leading-4 mt-7">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed350d9710a993d1769669c69ab4352b39cdfa12297fb25eeb03f74ee63243f?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
              className="object-contain object-center overflow-hidden"
              alt="Hotel Image"
            />
            <div className="flex flex-col items-stretch ml-3.5 my-6 self-start">
              <header className="text-yellow-800 text-sm leading-4">
                Lac Rose, Dakar
              </header>
              <h1 className="text-neutral-800 text-2xl font-semibold leading-6 whitespace-nowrap mt-2">
                Hôtel Lac Rose
              </h1>
              <p className="text-neutral-800 font-bold text-sm leading-4 mt-7">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed350d9710a993d1769669c69ab4352b39cdfa12297fb25eeb03f74ee63243f?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
              className="object-contain object-center overflow-hidden"
              alt="Hotel Image"
            />
            <div className="flex flex-col items-stretch ml-3.5 my-6 self-start">
              <header className="text-yellow-800 text-sm leading-4">
                Lac Rose, Dakar
              </header>
              <h1 className="text-neutral-800 text-2xl font-semibold leading-6 whitespace-nowrap mt-2">
                Hôtel Lac Rose
              </h1>
              <p className="text-neutral-800 font-bold text-sm leading-4 mt-7">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end">
        <Modal
          backdrop={backdrop}
          keyboard={false}
          open={open}
          onClose={() => {
            handleClose();
          }}
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
        </Modal>
      </div>
    </div>
  );
}
