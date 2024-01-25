import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/sidebar/Header';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getUserDetails } from '../util/GetUser';

export default function Template() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);

    // Redirect if no user and not already on the root path
    if (!userDetails && location.pathname !== '/') {
      navigate('/');
    }
  }, [navigate, location.pathname]); // Adding navigate and location.pathname as dependencies

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/5 max-lg:w-0 h-auto route border-r-2 bg-gray-300 ">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="w-4/5 max-lg:w-full bg-gray-100">
        <div className="bg-white-500 border-b-2 border-gray-300 h-22">
          <Header />
        </div>
        <div className="documo">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
