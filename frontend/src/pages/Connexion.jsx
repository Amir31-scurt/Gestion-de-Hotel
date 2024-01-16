import React from 'react';

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
            <span className="text-black text-opacity-90 text-xl leading-7 items-stretch  pt-2.5 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid max-md:mt-10">
              <input
                type="email"
                class="peer w-full p-0 text-black text-opacity-90 text-xl leading-7 items-stretch mt-2 p-1"
                placeholder="E-mail"
              />
            </span>
            <span className="text-black text-opacity-90 text-xl leading-7 items-stretch pt-2.5 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid max-md:mt-10">
              <input
                aria-label="Password"
                aria-role="textbox"
                className="peer p-1 w-full p-0 text-black text-opacity-90 text-xl leading-7 items-stretch mt-2"
                type="password"
                id="password"
                placeholder="Mot de passe"
              />
            </span>
            <span className="flex items-stretch justify-between gap-3.5 mt-8">
              <input
                type="checkbox"
                className="flex w-6 shrink-0 h-6 flex-col rounded-sm border-[2.667px] border-solid border-neutral-400"
              />
              <div className="text-black text-opacity-90 text-xl leading-7 self-center grow shrink basis-auto my-auto">
                Gardez-moi connecté
              </div>
            </span>
            <button
              type="submit"
              className="text-white text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-center bg-zinc-700 mt-9 px-16 py-3 rounded-md max-md:px-5"
            >
              Se connecter
            </button>
          </div>
          <a className="text-amber-300 text-center text-xl font-semibold leading-7 self-center whitespace-nowrap mt-7">
            Mot de passe oublié?
          </a>
          <div className="text-white text-center text-xl leading-7 self-center whitespace-nowrap mt-8">
            Vous n'avez pas de compte?{' '}
            <a href="#" className="font-bold text-amber-300">
              S'inscrire
            </a>
          </div>
        </div>
      </header>
    </form>
  );
}

export default Connexion;
