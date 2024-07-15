'use client'
import React from "react";
import FormComponent from "../components/FormComponent";
import { useLanguage } from '../context/LanguageContext';

const Congress: React.FC = () => {
  const { language } = useLanguage();
  return <div>
    <h1 className="text-3xl text-center text-lime-700 mb-4 tracking-wider">
     {language === 'pl'? 'Formularz rejestracyjny na kongres' :'Anmeldeformular für den Kongress' }</h1>
    <FormComponent/>
  </div>;
};

export default Congress;