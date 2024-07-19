'use client';
import { ABOUT_US_TITLE_PL, ABOUT_US_TITLE_DE, ABOUT_TITLE_PL, ABOUT_TITLE_DE , PEOPLE_LIST, ABOUT_US_TITLE_DESC_DE, ABOUT_US_TITLE_DESC_PL} from '../constants/index'
import Image from 'next/image'
import React from 'react'
import Link from "./Link";
import iconFallback from "../../public/map.svg";
import { useLanguage } from '../context/LanguageContext'
const AboutUs = () => {
    const { language } = useLanguage();
  return (
    <section className="flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/about.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/aboutus.png"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">{language === 'pl' ? ABOUT_TITLE_PL: ABOUT_TITLE_DE}</h2>
          </div>
          <p>
            {language === 'pl' ? ABOUT_US_TITLE_PL: ABOUT_US_TITLE_DE}
          </p>
          <h3 className='about-title-desc'>
            {language === 'pl' ? ABOUT_US_TITLE_DESC_PL: ABOUT_US_TITLE_DESC_DE}
          </h3>
          <ul className='text-center'>
            {
              PEOPLE_LIST.map(function(item) { 
                return <li className="py-2" key={item}>{item}</li>})
            }
          </ul>
           <Link 
            title={language === 'pl' ? "Poznaj nas": "Lernen Sie uns kennen"}
            icon="/play.svg"
            variant="btn_white_text" 
            href="/about"
          />
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon?: string;
  description?: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 image-container">
        <Image src={icon || iconFallback } alt="map" width={100} height={100} className='image'/>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default AboutUs