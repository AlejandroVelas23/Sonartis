import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { name: 'EN', flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="32" height="20">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    )},
    es: { name: 'ES', flag: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width="30"
      height="20"
      role="img"
      aria-label="Bandera de México"
    >
      {/* Parte verde */}
      <rect width="60" height="2" x="0" y="0" fill="#006847" />
      {/* Parte blanca */}
      <rect width="60" height="2" x="1" y="0" fill="#ffffff" />
      {/* Parte roja */}
      <rect width="60" height="2" x="2" y="0" fill="#ce1126" />
      {/* Águila con serpiente */}
      <g transform="translate(1.5, 1)" transform-origin="center" aria-hidden="true">
        <circle r="0.2" fill="#654321" />
        <path
          d="M-0.05,0.02 C-0.1,-0.1 0.1,-0.1 0.05,0.02 Z"
          fill="#ffd700"
          stroke="#000"
          strokeWidth="0.005"
        />
        <path
          d="M-0.15,-0.15 L0.15,0.15"
          stroke="#ffd700"
          strokeWidth="0.01"
        />
      </g>
    </svg>
    )}
  };

  const changeLanguage = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const currentLanguage = i18n.language as 'en' | 'es';
  const otherLanguage = currentLanguage === 'en' ? 'es' : 'en';

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={handleToggle}
        >
          <span className="mr-2">{languages[currentLanguage].flag}</span>
          {languages[currentLanguage].name}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            <button
              onClick={() => changeLanguage(otherLanguage)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <span className="mr-2">{languages[otherLanguage].flag}</span>
              {languages[otherLanguage].name}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

