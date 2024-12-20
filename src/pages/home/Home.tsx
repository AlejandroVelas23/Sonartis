import React from 'react';
import Banner from '../../../src/assets/images/banner2.png';
import Arquitectura2 from '../../assets/images/Arqui2.jpg';
import FondoNutricion from '../../assets/images/bannerN.jpg';
import DVP from '../../assets/images/DVP.jpg';
import { FaUser } from 'react-icons/fa';
import Button from '../../components/Button';
import UserCard from '../../components/UserCard';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col relative">
        {/* Banner Section */}
        <div className="flex-1 bg-cover bg-center bg-gradient-to-r from-gray-800 to-gray-600 shadow-2xl shadow-gray-900 z-10">
          <section className="flex flex-col sm:flex-row text-justify items-center h-full px-12 bg-black bg-opacity-30 py-24 shadow-md">
            <div className="flex-1 p-4 text-center">
              <h2 className="text-white text-3xl sm:text-5xl font-bold mb-4 sm:ml-24 w-1/2">{t('Home.bannerTitle')}</h2>
            </div>
            <div className="relative flex-1 sm:mr-8">
              <img src={Banner} alt="Banner" className="w-full h-auto mb-4 sm:-ml-48 shadow-lg shadow-cyan-700/30" />
              <Button
                text={t('Home.exploreButton')}
                className="absolute -bottom-2 w-1/3 sm:w-1/5 left-1/4 sm:left-36"
                route="/contact"
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
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">{t('Home.architectureTitle')}</h2>
              <p className="mb-8 text-lg text-justify text-white">{t('Home.architectureDescription')}</p>
              <Button
                text={t('Home.moreButton')}
                className="py-2 w-full sm:w-1/4 sm:ml-12"
                route="/contact"
              />
            </div>
          </section>

          {/* Nutrition Section */}
          <section className="relative p-12 bg-gray-900 shadow-custom z-10">
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${FondoNutricion})` }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div className="text-center text-white p-4 w-3/4 sm:w-1/2">
                  <h2 className="text-2xl font-bold mb-12">{t('Home.nutritionTitle')}</h2>
                  <p className="mb-8 text-justify">{t('Home.nutritionDescription')}</p>
                  <Button
                    text={t('Home.moreButton')}
                    className="py-2 w-full sm:w-1/4"
                    route="/contact"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Development Section */}
          <section className="flex flex-col sm:flex-row items-center py-16 px-8 sm:px-44 bg-black bg-opacity-50">
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">{t('Home.developmentTitle')}</h2>
              <p className="mb-8 text-lg text-justify text-white w-full sm:w-4/6">{t('Home.developmentDescription')}</p>
              <Button
                text={t('Home.moreButton')}
                className="py-2 w-full sm:w-1/4 sm:ml-12"
                route="/contact"
              />
            </div>
            <img
              src={DVP}
              alt="Descripción"
              className="w-full sm:w-1/2 h-auto sm:ml-24 drop-shadow-lg hover:drop-shadow-2xl mb-8 sm:mb-0"
            />
          </section>

          {/* Testimonials Section */}
          <section className="p-6 bg-gray-100 h-[32rem]">
            <h2 className="text-3xl font-bold text-center mb-6">{t('Home.testimonialsTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[22rem]">
              <UserCard
                name="Sarah M"
                icon={<FaUser />}
                description={t('Home.testimonial1')}
              />
              <UserCard
                name="David L"
                icon={<FaUser />}
                description={t('Home.testimonial2')}
              />
              <UserCard
                name="Emily R"
                icon={<FaUser />}
                description={t('Home.testimonial3')}
              />
              <UserCard
                name="Michael S"
                icon={<FaUser />}
                description={t('Home.testimonial4')}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

