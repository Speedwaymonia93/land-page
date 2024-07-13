'use client'
import React from 'react'
import Image from "next/image";
import Button from "./Link";
import { KONTAKT_BUTTON_PL, KONTAKT_BUTTON_DE, KONTAKT_INFO } from '../constants/index'
import { useLanguage } from '../context/LanguageContext'
const ContactUs = () => {
const { language } = useLanguage();
  return (
      <section className="flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
         Działamy dla Ciebie
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 flex-col">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">{language === 'pl' ? KONTAKT_BUTTON_PL : KONTAKT_BUTTON_DE}</h2>
          <ul className="regular-16 text-gray-30 xl:max-w-[520px] flex flex-col">{KONTAKT_INFO.map(function(item) { 
            return <li key={item}>{item}</li>
}) }</ul><Button 
            title={language === 'pl' ? "Kontakt z nami" : "Germnd"} 
            icon="/play.svg"
            variant="btn_white_text" 
            href='/contact'
          />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
