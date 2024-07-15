'use client';
import React from "react";
import Image from 'next/image'
import { CONGRESS_PEOPLE, ABOUT_US_TITLE_PL, ABOUT_US_TITLE_DE, CHIEFS_TITLE_PL,CHIEFS_TITLE_DE} from '../constants/index'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
   const { language } = useLanguage();
  return <div className="container">
    <h2 className='page-title'>{language === 'pl' ?  CHIEFS_TITLE_PL :  CHIEFS_TITLE_DE}</h2>
    <p>{language === 'pl' ? ABOUT_US_TITLE_PL :ABOUT_US_TITLE_DE }</p>
     <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {CONGRESS_PEOPLE.map((feature) => (
              <FeatureItem 
                key={feature.name}
                title={feature.name}
                icon={feature.photo}
                description={feature.email}
                functionDE={feature.functionDE}
                functionPL={feature.functionPL} />
            ))}
          </ul>
  </div>;
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  functionPL: string;
  functionDE: string;
}

const FeatureItem = ({ title, icon, description, functionDE, functionPL }: FeatureItem) => {
    const { language } = useLanguage();
  return (
    <li className="flex w-full flex-1 flex-col items-center">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={300} height={300} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
      <p>
        { language === 'pl' ? functionPL: functionDE }
      </p>
    </li>
  )
}

export default About;