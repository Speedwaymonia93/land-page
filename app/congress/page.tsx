'use client'
import React from "react";
import FormComponent from "../components/FormComponent";
import { useLanguage } from '../context/LanguageContext';
import { ADDRESS_DE, ADDRESS_PL, PRICE_DE, PRICE_PL, ATTENTION_DE, ATTENTION_PL, CONGRESS_TITLE_PL, CONGRESS_TITLE_DE} from '../constants/index';
const Congress: React.FC = () => {
  const { language } = useLanguage();
  return <div className="flex justify-center flex-col">
    <h2 className='text-4xl text-center pb-2'>{language === 'pl' ? CONGRESS_TITLE_PL : CONGRESS_TITLE_DE}</h2>
    <div></div>
    <a className="text-center mb-8" href={language === 'pl' ? '/Program_ramowy_Kongress_Bielsko_Biala_11.3.2024.pdf' : '/Rahmenprogramm_Kongress_Bielsko-Biala.pdf'} target="_blank" rel='noopener noreferrer'>
        <button className='mt-6 p-4 rounded-lg bg-rose-700 hover:bg-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-700 hover:text-white'>
          {language === 'pl' ? 'Program ramowy ' : 'Rahmenprogramm'}
        </button>
    </a>
    <h1 className="text-3xl text-center text-lime-700 mb-4 tracking-wider">
      {language === 'pl' ? 'Formularz rejestracyjny na kongres w Bielsku-Białej (11-13.10.2024)' : 'Anmeldeformular für den Kongress in Bielsko-Biała (11.-13.10.2024)'}</h1>
    <div className="text-left w-1/2 mx-auto">
<p className="mb-2"> {language === 'pl' ? ADDRESS_PL : ADDRESS_DE}</p>
    <p className="mb-2"> {language === 'pl' ? PRICE_PL : PRICE_DE}</p>
    <p className="mb-2"> {language === 'pl' ? ATTENTION_PL : ATTENTION_DE}</p>
    </div>
    
    <FormComponent/>
  </div>;
};

export default Congress;