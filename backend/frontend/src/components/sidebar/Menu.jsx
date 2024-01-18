import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Menu({ icone, text, link }) {
  return (
    <NavLink
      to={link}
      activeClassName="active"
      className="list-group-item px-2 list-group-item bg-transparent border-0 py-1 ps-5 nvlink"
    >
      <li className="flex-row gap-5 flex my-2 items-center no-underline">
        <div> {icone} </div>
        <h2 className="text-base font-bold texto max-lg:hidden">{text}</h2>
      </li>
    </NavLink>
  );
}
