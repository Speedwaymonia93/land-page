'use client'
import React from 'react'
import Image from "next/image";
import Button from "./Link";
import { KONTAKT_BUTTON_PL, KONTAKT_BUTTON_DE, KONTAKT_INFO } from '../constants/index'
import { useLanguage } from '../context/LanguageContext'
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
const ContactUs = () => {
const { language } = useLanguage();
  return (
      <section className="flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/chat.png" alt="camp" width={50} height={50} />
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 flex-col">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">{language === 'pl' ? KONTAKT_BUTTON_PL : KONTAKT_BUTTON_DE}</h2>
          <ul className="regular-16 text-gray-30 xl:max-w-[520px] flex flex-col">{KONTAKT_INFO.map(function(item) { 
            return <li key={item}>{item}</li>
}) }</ul><Button 
            title={language === 'pl' ? "Kontakt z nami" : "Kontaktieren Sie uns"} 
            icon="/play.svg"
            variant="btn_white_text" 
            href='/contact'
          />
        </div>
        <Link
              href="https://www.facebook.com/profile.php?id=100092516230953"
              target="_blank">
              <FaFacebookSquare className="facebook-icon" size={50} />
            </Link>
      </div>
    </section>
  )
}

export default ContactUs
