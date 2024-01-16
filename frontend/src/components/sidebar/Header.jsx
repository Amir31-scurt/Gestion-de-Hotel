import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdNotificationsNone } from 'react-icons/md';
import { Avatar } from 'primereact/avatar';
import User from '../../assets/user.png';
import { InputText } from 'primereact/inputtext';
import { RxExit } from 'react-icons/rx';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Dashboard
        </h1>
        <div className="flex justify-between gap-3">
          <div className="flex items-center">
            <div className="flex border-2 rounded-full ">
              <span className="p-input-icon-left flex items-center w-64 ">
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
