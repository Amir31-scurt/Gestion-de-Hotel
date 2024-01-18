import React from 'react';

export const Checkbox = ({ label }) => (
  <div className="flex items-center justify-between gap-3.5 mt-8">
    <input
      type="checkbox"
      className="flex w-6 shrink-0 h-6 flex-col rounded-sm border-[2.667px] border-solid border-neutral-400"
    />
    <div className="text-black text-opacity-90 text-xl leading-7 self-center grow whitespace-nowrap my-auto">
      <p className="text-lg">{label}</p>
    </div>
  </div>
);
