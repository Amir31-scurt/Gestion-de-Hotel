import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Template from '../layouts/Template';
import Dashboard from '../components/Dashboard';
import HotelsList from '../components/HotelsList';
import MotDePasseOubliee from './MotDePasseOubliee';

export default function ProtectedRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Connexion />,
    },
    {
      path: '/inscription',
      element: <Inscription />,
    },
    {
      path: '/mot-de-passe-oubliee',
      element: <MotDePasseOubliee />,
    },
    {
      path: '/main',
      element: <Template />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'listhotels',
          element: <HotelsList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
