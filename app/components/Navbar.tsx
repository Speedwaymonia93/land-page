'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS_DE, NAV_LINKS_PL} from '../constants'
import LinkButton from './Link'
import DropdownLanguage from './DropdownLanguage'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const { language } = useLanguage();

  return (
      <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <div className='logo-container'>
<Image src="/logo_centrum.jpg" width={100} height={100} alt='logo' />
        <Image src="/logo_podstawowe.png" width={100} height={100} alt='logo' />
        </div>
        
          </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
                  {language === 'pl' && NAV_LINKS_PL.map((link) => (
                      <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
                  ))}
        {language === 'de' && NAV_LINKS_DE.map((link) => (
                      <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
                  ))}
          </ul>
         <div className="lg:flexCenter hidden">
       <DropdownLanguage/>
          </div>
    </nav>
  )
}

export default Navbar
