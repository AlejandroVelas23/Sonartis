import React from "react";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import { FaCalendarAlt, FaFileSignature } from "react-icons/fa";
import Bn from '../../assets/images/BN.jpg'
import Button from "../../components/Button";
import { GiFruitBowl } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Nutrition: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 to-emerald-900 pb-12">
      <Banner 
        backgroundImage={Bn}
        text={t('Nutrition.bannerText')}
      />
      <div className="text-center text-white text-3xl font-bold mt-8">
        <h1>{t('Nutrition.servicesTitle')}</h1>
      </div>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-justify">
        <ServiceCard
          title={t('Nutrition.personalizedConsultationTitle')}
          description={t('Nutrition.personalizedConsultationDescription')}
          icon={FaCalendarAlt}
        />
        <ServiceCard
          title={t('Nutrition.weightControlTitle')}
          description={t('Nutrition.weightControlDescription')}
          icon={FaFileSignature}
        />
        <ServiceCard
          title={t('Nutrition.mealPlansTitle')}
          description={t('Nutrition.mealPlansDescription')}
          icon={GiFruitBowl}
        />    
      </div>
      <div className="flex flex-col items-center justify-center mt-8 py-10 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg shadow-lg mx-6 lg:mx-20">
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          {t('Nutrition.ctaTitle')}
        </h2>
        <p className="text-white text-center mb-6 ">
          {t('Nutrition.ctaDescription')} 
        </p>
        {/* <Button
        className="bg-white text-gray-950 hover:bg-cyan-900 hover:text-white"
        onClick={() => navigate('/dates')}>
         {t('Nutrition.ctaButton')}
        </Button> */}
      </div>
    </div>
  );
}

export default Nutrition;

