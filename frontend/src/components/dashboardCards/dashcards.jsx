import React from 'react';
import { IoMailOpen } from 'react-icons/io5';
import { TbLetterP } from 'react-icons/tb';
import { IoMdContacts } from 'react-icons/io';

// ViewModel function to handle logic related to data
const useDashcardsViewModel = () => {
  const content = [
    {
      number: 125,
      title: 'Formulaire',
      description: 'Je ne sais pas quoi mettre',
      icon: <IoMailOpen className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-violet-400',
    },
    {
      number: 40,
      title: 'Messages',
      description: 'Je ne sais pas quoi mettre',
      icon: <TbLetterP className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-teal-500',
    },
    {
      number: 600,
      title: 'Utilisateurs',
      description: 'Je ne sais pas quoi mettre',
      icon: <IoMdContacts className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-yellow-400',
    },
    {
      number: 25,
      title: 'E-mails',
      description: 'Je ne sais pas quoi mettre',
      icon: <IoMailOpen className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-red-600',
    },
    {
      number: 40,
      title: 'Hôtels',
      description: 'Je ne sais pas quoi mettre',
      icon: <TbLetterP className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-fuchsia-700',
    },
    {
      number: '02',
      title: 'Entités',
      description: 'Je ne sais pas quoi mettre',
      icon: <IoMdContacts className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-blue-700',
    },
  ];

  return {
    content,
  };
};

// View
const Dashcards = () => {
  const { content } = useDashcardsViewModel();

  return (
    <div className="w-full h-screen max-lg:h-fit">
      <div className="grid grid-cols-3 items-stretch gap-4 w-full max-lg:grid-cols-1 max-lg:gap-2 mb-20">
        {content.map((item, index) => (
          <div
            key={index}
            className="justify-center shadow-sm bg-white grow w-full pl-5 pr-20 py-5 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5"
          >
            <header className="flex max-lg:items-center max-lg:gap-5">
              <div className="flex flex-col items-stretch w-16">
                <span
                  className={`flex justify-center text-white text-opacity-90 text-center leading-6 whitespace-nowrap items-center aspect-square w-full rounded-full max-lg:px-3 ${item.bg}`}
                  role="button"
                  aria-label="Icon Button"
                >
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch">
                  <div className="flex items-center justify-center gap-2">
                    <p className="justify-center text-black text-opacity-90 text-3xl font-light leading-9">
                      {item.number}
                    </p>
                    <p className="text-black text-opacity-90 text-base font-light grow self-end">
                      {item.title}
                    </p>
                  </div>
                  <div className="text-black text-opacity-60 text-base leading-6 whitespace-wrap">
                    {item.description}
                  </div>
                </div>
              </div>
            </header>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashcards;
