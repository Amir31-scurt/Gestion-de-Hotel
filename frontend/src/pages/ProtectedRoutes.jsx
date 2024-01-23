import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Template from '../layouts/Template';
import Dashboard from '../components/Dashboard';
import HotelsList from '../components/HotelsList';
import MotDePasseOubliee from './MotDePasseOubliee';
import ResetPassword from './ResetPassword';

export default function ProtectedRoutes() {
  const router = createBrowserRouter([
    {
      index: true,
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
      path: '/reset-mot-de-passe/:id/:token',
      element: <ResetPassword />,
    },
    {
      path: '/',
      element: <Template />,
      children: [
        {
          index: true,
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'listhotels',
          element: <HotelsList />,
        },
      ],
    },
    // {
    //   path: '*', // Fallback for unmatched paths
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
