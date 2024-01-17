import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Connexion from './pages/Connexion';
import Template from './layouts/Template';
import Inscription from './pages/Inscription';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <>
      {/* <Connexion /> */}
      <ProtectedRoutes />
    </>
  );
}

export default App;
