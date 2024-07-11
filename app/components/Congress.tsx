'use client'
import React from 'react'
import Image from "next/image";
import Button from "./Link";
import { useLanguage } from '../context/LanguageContext'
import {KONGRES_PL, KONGRES_DE, KONGRES_TITLE_PL, KONGRES_TITLE_DE, KONGRES_TITLE_DESC_PL, KONGRES_TITLE_DESC_DE} from '../constants/index'
const Congress = () => {
  const { language } = useLanguage();
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          {language === 'pl' ? KONGRES_PL : KONGRES_DE}
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">{language === 'pl' ? KONGRES_TITLE_PL : KONGRES_TITLE_DE}</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">{language === 'pl' ? KONGRES_TITLE_DESC_PL : KONGRES_TITLE_DESC_DE}</p>
          <Button 
            title={language === 'pl' ? 'Więcej informacjo o kongresie' : 'In german'} 
            icon="/play.svg"
            variant="btn_white_text" 
            href="/congress"
          />
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/management.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  )
}

export default Congress
