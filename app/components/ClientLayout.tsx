'use client';

import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const languageTitles: { [key: string]: string } = {
  pl: "Strona Krajowego Związku Towarzystw Polsko-Niemieckich",
  de: "Website des Landesverbandes Deutsch-Polnischer Gesellschaften",
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = languageTitles[language];
  }, [language]);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
