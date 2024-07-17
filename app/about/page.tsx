'use client';
import React from "react";
import Image from 'next/image'
import { CONGRESS_PEOPLE, ABOUT_US_TITLE_PL, ABOUT_US_TITLE_DE, ABOUT_TITLE_PL,ABOUT_TITLE_DE, LOGOS} from '../constants/index'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
   const { language } = useLanguage();
  return <div className="container">
    <h2 className='page-title'>{language === 'pl' ? ABOUT_TITLE_PL : ABOUT_TITLE_DE}</h2>
    <p>{language === 'pl' ? ABOUT_US_TITLE_PL : ABOUT_US_TITLE_DE}</p>
    <div className="flex flex-center justify-center py-5 my-5 flex-col align-center items-center lg:flex-row">
       {LOGOS.map((logo) => (
         <Image src={logo.photo} key={logo.alt} alt="map" width={200} height={200} className="image-class"/>
            ))}
    </div>
  </div>;
};

export default About;