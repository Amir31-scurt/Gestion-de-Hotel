import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FormInput } from '../utils/FormInput';
import { Header } from '../utils/Header';
import { Button } from '../utils/Button';
import AuthServices from '../services/AuthServices';
import { getErrorMessage } from '../util/GetError';
import { message } from 'antd';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams(); // Retrieve id and token from URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthServices.resetPassword({
        id,
        token,
        password,
      });
      console.log(response.data);
      message.success('Mot de passe réinitialisé avec succès');
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
              Nouveau mot de passe
            </div>
            <p className="text-base pt-5 w-80">
              Entrez votre nouveau mot de passe
            </p>
            <FormInput
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              disabled={!password}
              onClick={handleSubmit}
              value={'Changer'}
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
