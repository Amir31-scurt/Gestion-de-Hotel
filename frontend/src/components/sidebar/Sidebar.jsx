import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Elements from './Utils';
import { Avatar } from 'primereact/avatar';
import User from '../../assets/user.png';
import { getUserDetails } from '../../util/GetUser';
export default function Sidebar() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);
  return (
    <div className="h-screen z-50 w-1/5 max-lg:w-full max-lg:bottom-0 max-lg:h-fit sideBarCompo fixed">
      <div className="flex gap-5 flex-col max-lg:flex-row justify-center max-lg:justify-between">
        <div className="flex items-center justify-start ps-5 gap-3 mt-3 max-lg:mt-0">
          <div className="nom">
            <span className="self-center flex items-stretch gap-5 max-lg:mt-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8a7e148474c44ca3a8f00e912ec36d75e65e66ea5a11d887147fa69fca8378?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                alt="Logo"
              />
              <h1 className="text-white text-opacity-90 text-xl font-bold leading-5 self-center grow whitespace-nowrap my-auto">
                RED PRODUCT
              </h1>
            </span>
          </div>
        </div>

        {/************* Menu ************/}

        <div className="max-lg:mt-0 longuer">
          {/***=========== Main-Menu ===========***/}
          <div className="flex-col max-lg:flex-row flex">
            <div className="mb-5">
              <h1 className="text-gray-200 ps-5 max-lg:hidden">Principal</h1>
            </div>
            {Elements.map((elem, index) => (
              <Menu {...elem} key={index} />
            ))}
          </div>
        </div>
        <div className="bottom-0 absolute pb-5">
          <div
            className={
              'flex gap-2 align-center justify-center p-2 text-color hover:surface-200 border-noround border-t-2 max-lg:hidden pe-28 border-gray-400 pt-4 ps-5 '
            }
          >
            <Avatar
              image={User}
              className="mr-2"
              style={{ width: '45px', height: '45px' }}
            />
            <div className="text-gray-400">
              {user && (
                <>
                  <p className="font-bold text-gray-300">{user.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-sm text-gray-500">en ligne</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
