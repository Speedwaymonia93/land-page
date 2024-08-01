'use client'
import React from 'react'
import { MEMBERSHIP_PL, MEMBERSHIP_DE, MEMBERSHIP_TITLE_PL, MEMBERSHIP_TITLE_DE } from '../constants/index'
import { useLanguage } from '../context/LanguageContext'

const Membership = () => {
  const { language } = useLanguage();
  return (
    <div className="container text-center">
     <h2 className='bold-20 lg:bold-32 text-center pb-2'>{language === 'pl' ? MEMBERSHIP_TITLE_PL : MEMBERSHIP_TITLE_DE}</h2>
          <p>{language === 'pl' ? MEMBERSHIP_PL: MEMBERSHIP_DE}</p>
    </div>
  )
}

export default Membership
