import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('Footer.about')}</h3>
            <p className='w-2/3 text-justify text-sm'>{t('Footer.aboutText')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('Footer.contact')}</h3>
            <p className='text-sm'>{t('Footer.address')}</p>
            <p className='text-sm'>{t('Footer.phone')}</p>
            <p className='text-sm'>{t('Footer.email')}</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">{t('Footer.follow')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 text-sm">{t('Footer.facebook')}</a>
              <a href="#" className="hover:text-gray-400 text-sm">{t('Footer.twitter')}</a>
              <a href="#" className="hover:text-gray-400 text-sm">{t('Footer.instagram')}</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className='text-sm'>&copy; {new Date().getFullYear()} {t('Footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
