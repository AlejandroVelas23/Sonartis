import React from 'react';
import Banner from '../../../src/assets/images/banner2.png';
import Arquitectura2 from '../../assets/images/Arqui2.jpg';
import FondoNutricion from '../../assets/images/bannerN.jpg';
import DVP from '../../assets/images/DVP.jpg';
import Button from '../../components/Button';
import TestimonialCard from '../../components/TestimonialCard';
import { useTranslation } from 'react-i18next';
import Nutriologa from '../../assets/images/Nutriologa.jpg';
import Cliente1 from '../../assets/images/Cliente1.jpg';
import Cliente2 from '../../assets/images/Cliente2.jpg';
import Cliente3 from '../../assets/images/Cliente3.jpg';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col relative">
        {/* Banner Section */}
        <div className="flex-1 bg-cover bg-center bg-gradient-to-r from-gray-800 to-gray-600 shadow-2xl shadow-gray-900 z-10">
          <section className="flex flex-col sm:flex-row text-justify items-center h-full px-12 bg-black bg-opacity-30 py-24 shadow-md">
            <div className="flex-1 p-4 text-center">
              <h2 className="text-white text-3xl text-start sm:text-5xl font-bold mb-4 sm:ml-24 w-1/2">{t('Home.bannerTitle')}</h2>
            </div>
            <div className="relative flex-1 sm:mr-8">
              <img src={Banner} alt="Banner" className="w-full h-auto mb-4 sm:-ml-48 shadow-lg shadow-cyan-700/30" />
              <Button
                children={t('Home.exploreButton')}
                className="absolute -bottom-2 w-1/3 sm:w-1/5 left-1/4 sm:left-36"
                onClick={() => window.location.href = '/development'}
              />
            </div>
          </section>
        </div>

        {/* Architecture Section */}
        <div className="flex-1 bg-cover bg-center bg-gradient-to-l from-gray-800 to-gray-600 shadow-lg shadow-black">
          <section className="flex flex-col sm:flex-row items-center py-16 px-8 sm:px-44 bg-black bg-opacity-50">
            <img
              src={Arquitectura2}
              alt="Descripción"
              className="w-full sm:w-1/4 h-auto sm:ml-24 drop-shadow-lg hover:drop-shadow-2xl mb-8 sm:mb-0"
            />
            <div className="w-full sm:w-1/2 p-4 ml-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">{t('Home.architectureTitle')}</h2>
              <p className="mb-8 text-lg text-justify text-white">{t('Home.architectureDescription')}</p>
              <Button
                children={t('Home.exploreButton')}
                className="w-1/3 sm:w-1/5 left-1/4 sm:left-36 "
                onClick={() => window.location.href = '/architecture'}
              />
            </div>
          </section>

          {/* Nutrition Section */}
          <section className="relative p-12 bg-gray-900 shadow-custom z-10">
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${FondoNutricion})` }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div className="text-center text-white p-4 w-3/4 sm:w-1/2">
                  <h2 className="text-3xl font-bold mb-12">{t('Home.nutritionTitle')}</h2>
                  <p className="mb-8 text-justify text-lg">{t('Home.nutritionDescription')}</p>
                  <Button
                    children={t('Home.exploreButton')}
                    className="-bottom-2 w-1/3 sm:w-1/5 left-1/4 sm:left-36"
                    onClick={() => window.location.href = '/nutrition'}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Development Section */}
          <section className="flex flex-col sm:flex-row items-center py-16 px-8 sm:px-44 bg-black bg-opacity-50">
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">{t('Home.developmentTitle')}</h2>
              <p className="mb-8 text-lg text-justify text-white w-full sm:w-4/6">{t('Home.developmentDescription')}</p>
              <Button
                children={t('Home.exploreButton')}
                className=" w-1/3 sm:w-1/3 left-1/4 sm:left-36"
                onClick={() => window.location.href = '/development'}
              />
            </div>
            <img
              src={DVP}
              alt="Descripción"
              className="w-full sm:w-1/2 h-auto sm:ml-24 drop-shadow-lg hover:drop-shadow-2xl mb-8 sm:mb-0"
            />
          </section>

          {/* Testimonials Section */}
          <section className="p-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">{t('Home.testimonialsTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                date="2023-05-15"
                title={t('Home.Ttestimonial1')}
                content={t('Home.testimonial1')}
                userPhoto={Cliente1}
                userName="Jóse Luis Loera"
              />
              <TestimonialCard
                date="2023-06-02"
                title={t('Home.Ttestimonial2')}
                content={t('Home.testimonial2')}
                userPhoto={Cliente2}
                userName="Edgar Herrera"
              />
              <TestimonialCard
                date="2023-06-20"
                title={t('Home.Ttestimonial3')}
                content={t('Home.testimonial3')}
                userPhoto={Cliente3}
                userName="Alejandro Velasquez"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

