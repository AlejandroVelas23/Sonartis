import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('footer.about')}</h3>
            <p>{t('footer.aboutText')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('footer.contact')}</h3>
            <p>{t('footer.address')}</p>
            <p>{t('footer.phone')}</p>
            <p>{t('footer.email')}</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">{t('footer.follow')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">{t('footer.facebook')}</a>
              <a href="#" className="hover:text-gray-400">{t('footer.twitter')}</a>
              <a href="#" className="hover:text-gray-400">{t('footer.instagram')}</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
