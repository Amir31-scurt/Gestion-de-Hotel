import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../utils/Header';
import { FormInput } from '../utils/FormInput';
import { Checkbox } from '../utils/Checkbox';
import { getErrorMessage } from '../util/GetError';
import AuthServices from '../services/AuthServices';
import { message } from 'antd';
import { Button } from '../utils/Button';
import { Bars } from 'react-loader-spinner';

export default function Inscription() {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    event.preventDefault();
    try {
      setLoading(true);
      const data = {
        fullName,
        email,
        password,
      };
      const response = await AuthServices.registerUser(data);
      console.log(response.data);
      setLoading(false);
      message.success('Inscription réussie!');
      navigate('/');
    } catch (err) {
      console.log(err);
      message.error(getErrorMessage(err));
      setLoading(false);
    }
    // console.log('Inscription reussie');
  };
  return (
    <div>
      <form className="flex flex-col justify-center items-stretch InscripForm">
        <header className="flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5  h-screen">
          <Header />
          <span className="flex w-96 max-w-full flex-col items-stretch max-md:my-6">
            <div className="rounded shadow bg-white flex w-full flex-col items-stretch mt-11 px-8 py-9 max-md:mt-10 max-md:px-5">
              <h2 className="text-black text-opacity-90 text-lg leading-6">
                Inscrivez-vous en tant que Admin
              </h2>
              <FormInput
                id="name"
                label="Nom"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput
                id="email"
                label="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                id="password"
                label="Mot de passe"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Checkbox label="Accepter les termes et la politique" />
              <Button
                disabled={!email || !password || !fullName}
                onClick={handleSignUp}
                loading={loading ? 'true' : 'false'}
                value={
                  loading ? (
                    <div className="flex gap-3 items-center">
                      <Bars
                        height="25"
                        width="25"
                        color="#fff"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                      <p>Chargement...</p>
                    </div>
                  ) : (
                    `S'inscrire`
                  )
                }
              ></Button>
            </div>
          </span>
          <button className="text-amber-300 text-center text-xl leading-7 self-center whitespace-nowrap">
            Vous avez déjà un compte?{' '}
            <Link
              to="/"
              className="font-bold text-amber-300 hover:no-underline hover:text-amber-500"
            >
              Se connecter
            </Link>
          </button>
        </header>
      </form>
    </div>
  );
}
