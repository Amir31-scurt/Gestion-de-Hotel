import React from 'react';
import { Link } from 'react-router-dom';

function Connexion() {
  return (
    <form className="fromBack flex flex-col justify-center items-stretch">
      <header className="flex w-full flex-col justify-center items-center px-16 max-md:max-w-full max-md:px-5 h-screen">
        <div className="flex max-w-full flex-col max-md:my-10">
          <span className="self-center flex items-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8a7e148474c44ca3a8f00e912ec36d75e65e66ea5a11d887147fa69fca8378?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
              className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
              alt="Product Image"
            />
            <span className="text-white text-opacity-90 text-3xl font-bold leading-5 self-center grow whitespace-nowrap my-auto">
              RED PRODUCT
            </span>
          </span>
          <div className="rounded shadow bg-white self-stretch flex w-full flex-col items-stretch mt-11 p-10 max-md:mt-10 max-md:px-5">
            <div className="text-black text-opacity-90 text-lg leading-6">
              Connectez-vous en tant que Admin
            </div>
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
            <span className="flex items-center justify-between gap-3.5 mt-8">
              <input
                type="checkbox"
                className="flex w-6 shrink-0 h-6 flex-col rounded-sm border-[2.667px] border-solid border-neutral-400"
              />
              <div className="text-black text-opacity-90 text-xl leading-7 self-center grow shrink basis-auto my-auto">
                <p className="text-lg">Gardez-moi connecté</p>
              </div>
            </span>
            <button className="text-white text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-center bg-zinc-700 mt-9 px-16 py-3 rounded-md max-md:px-5 hover:bg-zinc-900">
              <Link
                to="main/dashboard"
                className="hover:no-underline hover:text-white"
              >
                Se connecter
              </Link>
            </button>
          </div>
          <Link
            to="/mot-de-passe-oubliee"
            className="text-amber-300 text-center text-xl font-semibold leading-7 self-center whitespace-nowrap mt-7 hover:no-underline hover:text-amber-500"
          >
            Mot de passe oublié?
          </Link>
          <div className="text-white text-center text-xl leading-7 self-center whitespace-nowrap mt-8">
            Vous n'avez pas de compte?{' '}
            <Link
              to="/inscription"
              className="font-bold text-amber-300 hover:no-underline hover:text-amber-500"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </header>
    </form>
  );
}

export default Connexion;
