import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS_DE, NAV_LINKS_PL} from '../constants'
import LinkButton from './Link'

const Navbar = () => {
  return (
      <nav className='flexBetween max-container padding-container relative z-30 py-5'>
          <Link href="/">
              {/* <span>Towarzystwo</span>
              <div className='flexBetween'>
                   <Image src="/poland.svg" width={30} height={30} alt='logo' />
              <Image src="/germany.svg" width={30} height={30} alt='logo' />
              </div>
             
              <h1>polsko-niemieckie</h1> */}
        <Image src="/logo3.jpg" width={100} height={100} alt='logo' />
          </Link>
          <ul className='hidden h-full gap-12 lg:flex'>
                  {NAV_LINKS_PL.map((link) => (
                      <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
                  ))}
          </ul>
         <div className="lg:flexCenter hidden">
        <LinkButton 
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          
        />
          </div>
          
           <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
