import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../services/AuthServices';
import { message } from 'antd';
import { Header } from '../utils/Header';
import { getErrorMessage } from '../util/GetError';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    event.preventDefault();
    console.log('Connexion reussie');
    try {
      setLoading(true);
      let data = {
        email,
        password,
      };
      const response = await AuthServices.loginUser(data);
      console.log(response.data);
      localStorage.setItem('User', JSON.stringify(response.data)); // store user in local storage
      message.success('Connexion réussie');
      navigate('main/dashboard');
      setLoading(false);
    } catch (err) {
      console.log(err);
      message.error(getErrorMessage(err));
      setLoading(false);
    }
  };
  return (
    <form className="fromBack flex flex-col justify-center items-stretch">
      <header className="flex w-full flex-col justify-center items-center px-16 max-md:max-w-full max-md:px-5 h-screen">
        <div className="flex max-w-full flex-col max-md:my-10">
          <Header />
          <div className="rounded shadow bg-white self-stretch flex w-full flex-col items-stretch mt-11 p-10 max-md:mt-10 max-md:px-5">
            <div className="text-black text-opacity-90 text-lg leading-6">
              Connectez-vous en tant que Admin
            </div>
            <div className="holderDiv flex flex-col gap-5">
              <input
                type="email"
                id="email"
                value={email}
                className="flex shrink-0 h-[46px] flex-col mt-2 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid py-2 text-xl mb-5"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                id="password"
                value={password}
                className="flex shrink-0 h-[45px] flex-col mt-1.5 border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid py-2 text-xl"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
              />
            </div>
            <span className="flex items-center justify-between gap-3.5 mt-8">
              <input
                type="checkbox"
                className="flex w-6 shrink-0 h-6 flex-col rounded-sm border-[2.667px] border-solid border-neutral-400"
              />
              <div className="text-black text-opacity-90 text-xl leading-7 self-center grow shrink basis-auto my-auto">
                <p className="text-lg">Gardez-moi connecté</p>
              </div>
            </span>
            <button
              className="text-white text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-center bg-zinc-700 mt-9 px-16 py-3 rounded-md max-md:px-5 hover:bg-zinc-900"
              disabled={!email || !password}
              onClick={handleSubmit}
              loading={loading}
            >
              Se connecter
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
