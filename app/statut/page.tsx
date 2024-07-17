'use client'
import { useLanguage } from '../context/LanguageContext';
import React from 'react'

const News = () => {
    const { language } = useLanguage();
  return (
    <div className='text-center px-4 my-4 py-4'>
       <h3 className='about-title-desc'>Statut</h3>
      <p className='text-center mx-4'>
        {language === 'pl' ? 'Statut Krajowego Związku Towarzystw Polsko-Niemieckich' :'Satzung des Bundesverbandes der Deutsch-Polnischen Gesellschaften' } </p>

      <a href="/KZTPN_STATUT.pdf" target="_blank" rel='noopener noreferrer'>
        <button className='mt-6 p-4 rounded-lg bg-rose-700 hover:bg-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-700 hover:text-white'>
          {language === 'pl' ? 'Pobierz' : 'Herunterladen'}
        </button>
    </a>
    </div>
  )
}

export default News
