import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ icone, text, link }) {
  return (
    <a to={link}>
      <div className="flex-row gap-5 flex my-2 items-center text-white">
        <div> {icone} </div>
        <h2 className="text-base font-bold texto">{text}</h2>
      </div>
    </a>
  );
}
