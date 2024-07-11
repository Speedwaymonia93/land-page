import React from 'react'

const News = () => {
  return (
    <div className='text-center px-4 my-4 py-4'>
       <h3 className='about-title-desc'>Statut</h3>
      <p className='text-center mx-4'>Statut Krajowego Związku Towarzystw Polsko-Niemieckich</p>

      <a href="/KZTPN_STATUT.pdf" target="_blank" rel='noopener noreferrer'>
        <button className='mt-6 p-4 rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Otwórz statut</button>
    </a>
    </div>
  )
}

export default News
