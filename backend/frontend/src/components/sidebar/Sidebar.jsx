import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import Elements from './Utils';
import { TbPointFilled } from 'react-icons/tb';
import { Avatar } from 'primereact/avatar';
import User from '../../assets/user.png';
export default function Sidebar() {
  return (
    <div className="h-screen w-1/5 max-lg:w-full max-lg:bottom-0 max-lg:h-fit sideBarCompo fixed">
      <div className="flex flex-col max-lg:flex-row justify-center max-lg:justify-between">
        <div className="flex items-center justify-start ps-5 gap-3 mt-3 ">
          <div className="nom">
            <span className="self-center flex items-stretch gap-5 mt-5 max-lg:mt-0">
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

        <div className="mt-5 max-lg:mt-0 longuer">
          {/***=========== Main-Menu ===========***/}
          <div className="flex-col max-lg:flex-row flex gap-2">
            <div>
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
              <p className="font-bold text-gray-300">El Amir</p>
              <div className="flex items-center gap-2">
                <div className="ponite"></div>
                <p className="text-sm text-gray-500">en ligne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
