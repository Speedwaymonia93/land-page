'use client';
import React from "react";
import Image from 'next/image'
import {  ABOUT_US_TITLE_PL, ABOUT_US_TITLE_DE, ABOUT_TITLE_PL,ABOUT_TITLE_DE, LOGOS} from '../constants/index'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
   const { language } = useLanguage();
  return <div className="container">
    <h2 className='bold-20 lg:bold-32 text-center pb-2'>{language === 'pl' ? ABOUT_TITLE_PL : ABOUT_TITLE_DE}</h2>
    <p>{language === 'pl' ? ABOUT_US_TITLE_PL : ABOUT_US_TITLE_DE}</p>
    <div className="flex justify-center items-stretch">
    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 mb-8">
       {LOGOS.map((logo,index) => (
         <Image src={logo.photo} key={logo.alt} alt="map" width={200} height={200} className={`img-about ${index === LOGOS.length - 1 ? 'md:col-span-2' : ''}`}/>
       ))}
      </div>
      </div>
  </div>;
};

export default About;