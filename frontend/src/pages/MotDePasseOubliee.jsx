import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '../utils/FormInput';
import { Header } from '../utils/Header';
import { Button } from '../utils/Button';
import AuthServices from '../services/AuthServices';
import { getErrorMessage } from '../util/GetError';
import { message } from 'antd';

export default function MotDePasseOubliee() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email,
      };
      const response = await AuthServices.forgotPassword(data);
      console.log(response.data);
      message.success(
        'Le lien de la création du nouveau mot de passe est envoyé dans votre mail'
      );
      navigate('/');
    } catch (error) {
      console.log(error);
      message.error(getErrorMessage(error));
    }
  };
  return (
    <form className="fromBack flex flex-col justify-center items-stretch">
      <header className="flex w-full flex-col justify-center items-center px-16 max-md:max-w-full max-md:px-5 h-screen">
        <div className="flex max-w-full flex-col max-md:my-10">
          <Header />
          <div className="rounded shadow bg-white w-1/2 self-center flex w-full flex-col items-stretch mt-11 p-10 max-md:mt-10 max-md:px-5">
            <div className="text-black text-opacity-90 text-lg leading-6">
              Mot de passe oublié?
            </div>
            <p className="text-base pt-5 w-80">
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
              instructions sur la façon de modifier votre mot de passe.
            </p>
            <FormInput
              id="email"
              label="Votre e-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              disabled={!email}
              onClick={handleSubmit}
              value={'Envoyer'}
            ></Button>
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
