// File: app/congress/anotherPage.tsx
'use client';
import React from "react";
import { CONGRESS_POSTER } from "../../constants";
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
const AnotherPage: React.FC = () => {
    const { language } = useLanguage();
  return (
    <div className="flex justify-center flex-col">
       <div className="flex justify-center mt-8">
      <Image src={CONGRESS_POSTER} alt="Congress Poster" width={900} height={1200}/>
    </div>
    <a className="text-center mb-8" href={language === 'pl' ? '/ULOTKA_PL.pdf': '/ULOTKA_DE.pdf'} target="_blank" rel='noopener noreferrer'>
        <button className='mt-6 p-4 rounded-lg bg-rose-700 hover:bg-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-700 hover:text-white'>
          {language === 'pl' ? 'Program ' : 'Programm'}
        </button>
      </a>
      <div className="flex justify-center flex-col">
        
        
      </div>
    </div>
  );
};

export default AnotherPage;
