import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/sidebar/Header';
import { Outlet } from 'react-router-dom';

export default function Template() {
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
