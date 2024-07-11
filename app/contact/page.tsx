'use client'
import React from 'react'
import { KONTAKT_INFO, KONTAKT_TITLE_PL, KONTAKT_TITLE_DE } from '../constants/index'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { language } = useLanguage();
  return (
    <div className="container text-center">
      <h2 className='page-title'>{language === 'pl' ? KONTAKT_TITLE_PL : KONTAKT_TITLE_DE}</h2>
     <ul className="regular-16 text-gray-30 flex flex-col text-center max-w-full">{KONTAKT_INFO.map(function(item) { 
            return <li key={item}>{item}</li>
}) }</ul>
    </div>
  )
}

export default Contact
