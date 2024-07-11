// Example component
'use client';

import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="pl">Polski</option>
        <option value="de">Deutch</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;