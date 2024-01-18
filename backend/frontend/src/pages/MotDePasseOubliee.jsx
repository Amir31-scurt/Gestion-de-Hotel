import React from 'react';
import { Link } from 'react-router-dom';

export default function MotDePasseOubliee() {
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
          <div className="rounded shadow bg-white w-1/2 self-center flex w-full flex-col items-stretch mt-11 p-10 max-md:mt-10 max-md:px-5">
            <div className="text-black text-opacity-90 text-lg leading-6">
              Mot de passe oublié?
            </div>
            <p className="text-base pt-5">
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
              instructions sur la façon de modifier votre mot de passe.
            </p>
            <label
              htmlFor="email"
              className="text-gray-500 text-opacity-90 text-base leading-6 mt-9"
            >
              Votre e-mail
            </label>
            <input
              type="email"
              id="email"
              className="flex shrink-0 h-[46px] flex-col border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid"
            />
            <button className="text-white text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-center bg-zinc-700 mt-9 px-16 py-3 rounded-md max-md:px-5 hover:bg-zinc-900">
              Envoyer
            </button>
          </div>
          <p className="text-white text-center text-xl font-semibold leading-7 self-center whitespace-nowrap mt-7 ">
            Revenir à la{' '}
            <Link
              to="/"
              className="text-amber-300 hover:no-underline hover:text-amber-400"
            >
              connexion
            </Link>
          </p>
        </div>
      </header>
    </form>
  );
}
