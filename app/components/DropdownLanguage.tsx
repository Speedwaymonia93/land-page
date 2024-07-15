// Example component
'use client';

import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className='p-2'>
      <select value={language} onChange={handleLanguageChange} className='p-3 rounded-md'>
        <option value="pl">Polski 🇵🇱</option>
        <option value="de">Deutch 🇩🇪</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;