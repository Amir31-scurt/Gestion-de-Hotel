import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdNotificationsNone } from 'react-icons/md';
import User from '../../assets/user.png';
import { InputText } from 'primereact/inputtext';
import { RxExit } from 'react-icons/rx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../util/GetUser';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (!user) {
    navigate('/');
  }

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);
  // Function to derive the header title based on the current route
  const handleLougout = () => {
    localStorage.removeItem('User');
    navigate('/');
  };
  const getHeaderTitle = () => {
    switch (path) {
      case '/dashboard':
        return 'Dashboard';
      case '/listhotels':
        return 'Liste des hôtels';
      // Add more cases for other routes if needed
      default:
        return 'Unknown Page';
    }
  };
  return (
    <header className="bg-white shadow fixed">
      <div className=" w-[80vw] max-lg:w-[98vw] py-3 flex justify-between max-lg:px-4 px-8 items-center max-lg:gap-2">
        <h4 className="text-2xl font-medium leading-tight text-gray-900">
          {getHeaderTitle()}
        </h4>
        <div className="flex justify-between gap-3">
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
          <div className="flex items-center gap-3">
            <button className="">
              <MdNotificationsNone className="text-2xl" />
            </button>
            <button
              type="button"
              className="flex text-sm bg-gray-800 max-lg:h-12 max-lg:w-12 h-10 w-10 rounded-full md:me-0"
              id="user-menu-button"
              aria-expanded={dropdownVisible ? 'true' : 'false'}
              onClick={toggleDropdown}
            >
              <img
                src={user?.avatar || User}
                alt="User Avatar"
                className="rounded-full"
              />
            </button>
            {dropdownVisible && (
              <div
                className="fixed top-16 start-0 end-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600"
                id="user-dropdown"
              >
                <ul
                  className="py-2 flex flex-col gap-5"
                  aria-labelledby="user-menu-button"
                >
                  <div className="flex items-center gap-3">
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
                    <p>Recherche</p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-3"
                    id="user-menu-button"
                    aria-expanded={dropdownVisible ? 'true' : 'false'}
                    onClick={toggleDropdown}
                  >
                    <div className="flex text-sm bg-gray-800 h-10 w-10 rounded-full md:me-0">
                      <img
                        src={user?.avatar || User}
                        alt="User Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <p>Modifier le profile</p>
                  </button>
                  <button onClick={handleLougout} className="flex gap-3">
                    <RxExit className="text-2xl" />
                    <p>Déconnexion</p>
                  </button>
                </ul>
              </div>
            )}
            <button onClick={handleLougout} className="max-lg:hidden">
              <RxExit className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
