'use client'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS_PL, FOOTER_LINKS_DE } from '../constants/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSelector from './DropdownLanguage'
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    const { language } = useLanguage();
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {language === 'pl' && FOOTER_LINKS_PL.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.key}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {language === 'de' && FOOTER_LINKS_DE.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.key}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5 testright">
              <FooterColumn title={language === 'pl'? FOOTER_CONTACT_INFO.title : FOOTER_CONTACT_INFO.titleDE}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
                 <Link
              href="https://www.facebook.com/profile.php?id=100086672174330"
              target="_blank">
              <FaFacebookSquare className="facebook-icon text-blue-600" size={50} />
            </Link>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          {
            language === 'pl'? ' 2024 Krajowy Związek Towarzystw Polsko-Niemieckich | All rights reserved ': '2024 Landesverband der Polnisch-Deutschen Gesellschaften | All rights reserved'
          }
        </p>

        <div className='lg:hidden'><LanguageSelector/></div>
        
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer