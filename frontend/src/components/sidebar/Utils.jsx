import React from 'react';
import { HiComputerDesktop } from 'react-icons/hi2';
import { MdDashboard } from 'react-icons/md';

const Elements = [
  {
    icone: <MdDashboard className="text-3xl" />,
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    icone: <HiComputerDesktop className="text-3xl" />,
    text: 'Liste des hôtels ',
    link: '/listhotels',
  },
];

export default Elements;
