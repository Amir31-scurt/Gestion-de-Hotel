import React from 'react';

export const Button = ({ value, disabled, onClick, loading }) => (
  <button
    className="text-white text-center text-lg font-medium leading-7 whitespace-nowrap justify-center items-center bg-zinc-700 mt-9 px-16 py-3 rounded-md max-md:px-5 hover:bg-zinc-900"
    disabled={disabled}
    onClick={onClick}
    loading={loading}
  >
    {value}
  </button>
);
