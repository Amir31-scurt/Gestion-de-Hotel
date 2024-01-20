import React from 'react';

export const Header = () => (
  <span className="self-center flex items-stretch gap-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8a7e148474c44ca3a8f00e912ec36d75e65e66ea5a11d887147fa69fca8378?apiKey=43ce1334d0e849af9a7e83b039f606d4&"
      className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
      alt="Logo"
    />
    <h1 className="text-white text-opacity-90 text-3xl font-bold leading-5 self-center grow whitespace-nowrap my-auto">
      RED PRODUCT
    </h1>
  </span>
);
