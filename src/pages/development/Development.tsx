import React from "react";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import BD from '../../assets/images/BD.jpg'
import Button from "../../components/Button";
import { FaMobileAlt } from "react-icons/fa";
import { FiMonitor, FiShoppingCart, FiServer } from "react-icons/fi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Development: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-700 to-cyan-700 pb-12">
      <Banner 
        backgroundImage={BD}
        text={t('Development.bannerText')}
      />
      <div className="text-center text-white text-3xl font-bold mt-8 mb-12">
        <h1>{t('Development.servicesTitle')}</h1>
      </div>
      <div className="p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title={t('Development.mobileAppTitle')}
          description={t('Development.mobileAppDescription')}
          icon={FaMobileAlt}
        />
        <ServiceCard
          title={t('Development.webDevTitle')}
          description={t('Development.webDevDescription')}
          icon={FiMonitor}
        />
        <ServiceCard
          title={t('Development.ecommerceTitle')}
          description={t('Development.ecommerceDescription')}
          icon={FiShoppingCart}
        />
        <ServiceCard
          title={t('Development.consultingTitle')}
          description={t('Development.consultingDescription')}
          icon={FaArrowsDownToPeople}
        />
        <ServiceCard
          title={t('Development.backendTitle')}
          description={t('Development.backendDescription')}
          icon={FiServer}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-16 py-10 bg-gradient-to-r from-indigo-800 to-blue-500 rounded-lg shadow-lg mx-6 lg:mx-20">
    <h2 className="text-white text-3xl font-bold text-center mb-4">
      {t('Development.ctaTitle')}
    </h2>
    <p className="text-white text-center mb-6 max-w-2xl">
       {t('Development.ctaDescription')}
    </p>
    <Button type="submit" className="w-full max-w-md bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
        {t('Development.ctaButton')}
    </Button>
  </div>
    </div>
  );
}

export default Development;

