import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdNotificationsNone } from 'react-icons/md';
import { Avatar } from 'primereact/avatar';
import User from '../../assets/user.png';
import { InputText } from 'primereact/inputtext';
import { RxExit } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  // Function to derive the header title based on the current route
  const getHeaderTitle = () => {
    switch (path) {
      case '/main/dashboard':
        return 'Dashboard';
      case '/main/listhotels':
        return 'Liste des hôtels';
      // Add more cases for other routes if needed
      default:
        return 'Unknown Page';
    }
  };
  return (
    <header className="bg-white shadow fixed">
      <div className=" w-[80vw] max-lg:w-[98vw] py-5 flex justify-between px-8 items-center">
        <h4 className="text-2xl font-bold leading-tight text-gray-900">
          {getHeaderTitle()}
        </h4>
        <div className="flex justify-between gap-3">
          <div className="flex items-center">
            <div className="flex border-2 rounded-full">
              <span className="p-input-icon-left flex items-center w-64">
                <div className="ps-3">
                  <IoSearch className="text-xl" />
                </div>
                <InputText
                  placeholder="Recherche..."
                  className="py-1 text-base px-2 rounded-full w-64 focus:outline-none"
                />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button>
              <MdNotificationsNone className="text-2xl" />
            </button>
            <button className="">
              <Avatar
                image={User}
                shape="circle"
                style={{ width: '45px', height: '45px' }}
              />
              <div className="ponite absolute border-2 top-[50px] right-[69px]"></div>
            </button>
            <button>
              <RxExit className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
