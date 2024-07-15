'use client'
import React from 'react'
import Image from "next/image";
import Button from "./Link";
import { useLanguage } from '../context/LanguageContext'
import {KONGRES_TITLE_PL, KONGRES_TITLE_DE, KONGRES_TITLE_DESC_PL, KONGRES_TITLE_DESC_DE} from '../constants/index'
const Congress = () => {
  const { language } = useLanguage();
  return (
    <section className="flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/olympics.png" alt="camp" width={50} height={50} />
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 flex-col">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">{language === 'pl' ? KONGRES_TITLE_PL : KONGRES_TITLE_DE}</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">{language === 'pl' ? KONGRES_TITLE_DESC_PL : KONGRES_TITLE_DESC_DE}</p>
          <Button 
            title={language === 'pl' ? 'Więcej informacji o kongresie' : 'Weitere Informationen über den Kongress'} 
            icon="/play.svg"
            variant="btn_white_text" 
            href="/congress"
          />
        </div>
      </div>
    </section>
  )
}

export default Congress
