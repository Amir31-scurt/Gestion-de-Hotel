import React from 'react';
import Dashcards from './dashboardCards/dashcards';
import { motion } from 'framer-motion';

const useDashboardViewModel = () => {
  // You can include data fetching, business logic, or state management here

  return {
    welcomeMessage: 'Bienvenue sur RED Product',
    subTitle: 'Lorem ipsum dolor sit amet consectetur',
  };
};

// View
const WelcomeMessage = ({ message, subTitle }) => (
  <div className="1st bg-white shadow mt-14 pt-2">
    <div className="max-w-7xl py-5 px-4 sm:px-6 lg:px-8">
      <p className="text-2xl leading-tight text-gray-900 m-0 p-0">{message}</p>
      <p className="text-sm text-gray-500 m-0 p-0">{subTitle}</p>
    </div>
  </div>
);

// View
const Dashboard = () => {
  const { welcomeMessage, subTitle } = useDashboardViewModel();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <WelcomeMessage message={welcomeMessage} subTitle={subTitle} />
      <div className="cards my-5 px-4 max-lg:px-10">
        <Dashcards />
      </div>
    </motion.div>
  );
};

export default Dashboard;
