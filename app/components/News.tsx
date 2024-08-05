'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Link'
import { useLanguage } from '../context/LanguageContext'
import { PAGE_TITLE_PL, PAGE_TITLE_DE} from '../constants'
const News = () => {
    const { language } = useLanguage();
  return (
     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-4xl text-center font-bold">{language === 'pl' ? "Witamy na stronie Krajowego Związku Towarzystw Polsko-Niemieckich!" : "Willkommen auf der Website des Landesverbandes der Polnisch-Deutschen Gesellschaften!"}</h1>
      </div>
    </section>
  )
}

export default News
