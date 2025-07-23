import React, { useState } from 'react';
import { useLang } from './LanguageContext';
import "./index.css"

const languages = [
  {
    code: 'en',
    label: 'English',
    flag: 'https://flagcdn.com/w40/gb.png',
  },
  {
    code: 'ar',
    label: 'Arabic',
    flag: 'https://flagcdn.com/w40/sa.png', // Saudiya Arabistoni bayrog'i
  },
];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  const currentLang = languages.find(l => l.code === lang);

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="language-dropdown" onClick={() => setOpen(!open)}>
      <button className="lang-button">
        <img src={currentLang.flag} alt={currentLang.label} className="flag" />
        <span>{currentLang.code.toUpperCase()}</span>
        <span className="arrow">▼</span>
      </button>
      {open && (
        <ul className="lang-menu">
          {languages.map(l => (
            <li key={l.code} onClick={() => handleSelect(l.code)}>
              <img src={l.flag} alt={l.label} className="flag" />
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;