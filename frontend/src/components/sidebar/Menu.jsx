import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Menu({ icone, text, link }) {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`list-group-item px-2 list-group-item bg-transparent border-0 ps-5 nvlink ${
        isActive ? 'active' : ''
      }`}
    >
      <li className="flex-row gap-5 max-lg:gap-2 flex my-1 max-lg:my-2 items-center no-underline">
        <div>{icone}</div>
        <h2 className="text-base font-bold texto max-lg:hidden">{text}</h2>
      </li>
    </Link>
  );
}
