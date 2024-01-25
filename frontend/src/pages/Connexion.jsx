import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../services/AuthServices';
import { message } from 'antd';
import { Header } from '../utils/Header';
import { getErrorMessage } from '../util/GetError';
import { FormInput } from '../utils/FormInput';
import { Button } from '../utils/Button';
import { Checkbox } from '../utils/Checkbox';

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
      navigate('/dashboard');
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
          <div className="rounded shadow bg-white self-stretch flex flex-col items-stretch mt-11 p-10 max-md:mt-10 max-md:px-5">
            <div className="text-black text-opacity-90 text-[17.7px] leading-6">
              Connectez-vous en tant que Admin
            </div>
            <div className="holderDiv flex flex-col gap-5">
              <FormInput
                id="email"
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                id="password"
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Checkbox label="Gardez-moi connecté" />
            <Button
              disabled={!email || !password}
              onClick={handleSubmit}
              loading={loading ? 'true' : 'false'}
              value={'Se Connecter'}
            ></Button>
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
