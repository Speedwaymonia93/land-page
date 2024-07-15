'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Link'
import { useLanguage } from '../context/LanguageContext'
import { AKTUALNOSCI_DE, AKTUALNOSCI_PL,  AKTUALNOSCI_TITLE_PL,  AKTUALNOSCI_TITLE_DE } from '../constants'
const News = () => {
    const { language } = useLanguage();
  return (
     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        
       

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/statute.png"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">{language === 'pl' ? AKTUALNOSCI_TITLE_PL : AKTUALNOSCI_TITLE_DE}</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          {language === 'pl' ? AKTUALNOSCI_PL : AKTUALNOSCI_DE}
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            title={language === 'pl' ? "Przejdź do statutu" : "Zur Satzung"} 
            icon="/play.svg"
            variant="btn_white_text" 
            href="/statut"
          />
        </div>
      </div>

     
    </section>
  )
}

export default News
