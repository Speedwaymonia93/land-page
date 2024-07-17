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
        <h1 className="bold-52 text-xl text-center lg:bold-80">{language === 'pl' ? AKTUALNOSCI_PL : AKTUALNOSCI_DE}</h1>
      </div>
    </section>
  )
}

export default News
