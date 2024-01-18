import React from 'react';

export const FormInput = ({ id, label, type, onChange }) => (
  <div className="mt-5">
    <label
      htmlFor={id}
      className="text-gray-500 text-opacity-90 text-base leading-6 mt-7"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="flex shrink-0 h-[46px] flex-col border-b-[1.333px] border-b-neutral-400 border-b-opacity-20 border-solid py-2 text-xl w-full"
      onChange={onChange}
    />
  </div>
);
