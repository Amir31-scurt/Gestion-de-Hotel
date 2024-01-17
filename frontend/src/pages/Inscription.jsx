import React from 'react';
import { Link } from 'react-router-dom';

export default function Inscription() {
  return (
    <div>
      <form className="flex flex-col justify-center items-stretch InscripForm">
        <header className=" flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5  h-screen">
          <span className="flex w-96 max-w-full flex-col items-stretch max-md:my-10">
            <span className="self-center flex items-stretch gap-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8a7e148474c44ca3a8f00e912ec36d75e65e66ea5a11d887147fa69fca8378?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                alt="Logo"
              />
              <h1 className="text-white text-opacity-90 text-3xl font-bold leading-5 self-center grow whitespace-nowrap my-auto">
                RED PRODUCT
              </h1>
            </span>
            <div className="rounded shadow bg-white flex w-full flex-col items-stretch mt-11 px-8 py-9 max-md:mt-10 max-md:px-5">
              <h2 className="text-black text-opacity-90 text-lg leading-6">
                Inscrivez-vous en tant que Admin
              </h2>
              <label
                htmlFor="name"
                className="text-gray-500 text-opacity-90 text-base leading-6 mt-7"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="flex shrink-0 h-[45px] flex-col mt-2.5 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid py-2 focus:border-b-2 focus:outline-none"
              />
              <label
                htmlFor="email"
                className="text-gray-500 text-opacity-90 text-base leading-6 mt-9"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="flex shrink-0 h-[46px] flex-col mt-2 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid py-2"
              />
              <label
                htmlFor="password"
                className="text-gray-500 text-opacity-90 text-base leading-6 mt-9"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="flex shrink-0 h-[45px] flex-col mt-1.5 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid py-2"
              />
              <div className="flex items-center justify-between gap-3.5 mt-8">
                <input
                  type="checkbox"
                  className="flex w-6 shrink-0 h-6 flex-col rounded-sm border-[2.667px] border-solid border-neutral-400"
                />
                <div className="text-black text-opacity-90 text-xl leading-7 self-center grow whitespace-nowrap my-auto">
                  <p className="text-lg">Accepter les termes et la politique</p>
                </div>
              </div>
              <button
                type="submit"
                className="text-white text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-center bg-neutral-600 mt-9 px-16 py-3 rounded-md max-md:px-5"
              >
                S'inscrire
              </button>
            </div>
          </span>
          <div className="text-amber-300 text-center text-xl leading-7 self-center whitespace-nowrap mt-7">
            Vous avez déjà un compte?{' '}
            <Link
              to="/"
              className="font-bold text-amber-300 hover:no-underline hover:text-amber-500"
            >
              Se connecter
            </Link>
          </div>
        </header>
      </form>
    </div>
  );
}
