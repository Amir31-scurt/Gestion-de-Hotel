import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/sidebar/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../util/GetUser';

export default function Template() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);

  if (!user && location.pathname !== '/') {
    navigate('/');
  }
  return (
    <div className="flex h-full">
      {/************ SidBar********** */}

      <div className="w-1/5 max-lg:w-0 h-auto route border-r-2 bg-gray-300 ">
        <Sidebar />
      </div>

      <div className="w-4/5 max-lg:w-full bg-gray-100">
        {/********NavBar**********/}
        <div className="bg-white-500 border-b-2 border-gray-300 h-22">
          <Header />
        </div>

        {/********* ConTenu Page **********/}
        <div className="documo">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
