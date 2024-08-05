'use client'
import React from "react";
import FormComponent from "../components/FormComponent";
import { useLanguage } from '../context/LanguageContext';
import { ADDRESS_DE, ADDRESS_PL, PRICE_DE, PRICE_PL, ATTENTION_DE, ATTENTION_PL} from '../constants/index';
const Congress: React.FC = () => {
  const { language } = useLanguage();
  return <div className="flex justify-center flex-col">
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