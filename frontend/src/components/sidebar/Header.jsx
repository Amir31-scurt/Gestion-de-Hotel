import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdNotificationsNone } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../util/GetUser';
import User from '../../assets/user.png';
import { InputText } from 'primereact/inputtext';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
    if (!userDetails) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('User');
    navigate('/');
  };

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/listhotels':
        return 'Liste des hôtels';
      default:
        return 'Unknown Page';
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="bg-white shadow fixed z-50 w-full">
      <div className="w-[80vw] max-lg:w-[98vw] py-3 flex justify-between max-lg:px-4 px-8 items-center max-lg:gap-2">
        <h4 className="text-2xl font-medium leading-tight text-gray-900">
          {getHeaderTitle()}
        </h4>

        <div className="flex items-center gap-3">
          {/* Dropdown Content */}
          {isDropdownVisible && (
            <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 z-50">
              <InputText placeholder="Recherche..." className="w-full mb-4" />
              <button
                onClick={handleLogout}
                className="flex gap-3 items-center"
              >
                <RxExit className="text-2xl" />
                <span>Déconnexion</span>
              </button>
            </div>
          )}
          <div className="flex items-center max-lg:hidden">
            <div className="flex border-2 rounded-full">
              <span className="p-input-icon-left flex items-center w-64  max-lg:w-fit">
                <div className="ps-3">
                  <IoSearch className="text-xl text-gray-300" />
                </div>
                <InputText
                  placeholder="Recherche..."
                  className="py-1 text-base px-2 rounded-full w-full focus:outline-none"
                />
              </span>
            </div>
          </div>
          {/* Always Visible Icons */}
          <MdNotificationsNone className="text-2xl" />
          <img
            src={user?.avatar || User}
            alt="User Avatar"
            className="rounded-full h-10 w-10"
          />
          {/* Visible on lg and larger screens */}
          <button
            className="hidden max-lg:inline-flex"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open Menu</span>
            <IoMdArrowDropdown />
          </button>
          <button onClick={handleLogout} className="flex gap-3 max-lg:hidden">
            <RxExit className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
