"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';  // Import js-cookie
import { useLanguage } from '../context/LanguageContext';
import { COOKIE_PL, COOKIE_DE } from '../constants';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const { language } = useLanguage();
  // Check if the cookie consent has already been accepted
  useEffect(() => {
    const consent: string | undefined = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true); // Show the banner if no consent cookie is found
    }
  }, []);

  // Handle accepting cookies
  const acceptCookies = (): void => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowBanner(false); // Hide the banner after acceptance
  };

  if (!showBanner) return null; // If no banner is needed, render nothing

  return (
    <div className="cookie-banner">
      <p>
        {language === 'pl'? COOKIE_PL : COOKIE_DE}
      </p>
      <button onClick={acceptCookies}>  {language === 'pl'? 'Zaakceptuj' : "Ja"}</button>
    </div>
  );
};

export default CookieBanner;
