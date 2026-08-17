'use client'
import React from "react";
import { useLanguage } from '../context/LanguageContext';
import { ADDRESS_DE, ADDRESS_PL, PRICE_DE, PRICE_PL, ATTENTION_DE, ATTENTION_PL, CONGRESS_TITLE_PL, CONGRESS_TITLE_DE, CONGRESS_DESCRIPTION_PL, CONGRESS_DESCRIPTION_DE } from '../constants/index';
import FormComponent from '../components/FormComponent';

const Congress: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="flex justify-center flex-col text-center mb-8">
      <h2 className='text-4xl text-center pb-2'>{language === 'pl' ? CONGRESS_TITLE_PL : CONGRESS_TITLE_DE}</h2>

      <h1 className="text-3xl text-center text-lime-700 mb-4 tracking-wider">
        {language === 'pl' ? 'Formularz zgłoszenia na kongres' : 'Anmeldeformular zum Kongress'}
      </h1>
      <FormComponent />

      <a href="/congress/anotherPage" target="_blank" rel="noopener noreferrer">
        <button className='mt-6 p-4 rounded-lg bg-rose-700 hover:bg-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-700 hover:text-white'>
          {language === 'pl' ? 'Bielsko-Biała 2024' : 'Bielsko-Biała 2024'}
        </button>
      </a>
    </div>
  );
};

export default Congress;

