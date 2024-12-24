import React from "react";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import { FaFileSignature } from "react-icons/fa";
import OA2 from '../../assets/images/OA2.jpg';
import Button from "../../components/Button";
import { GiTreeDoor } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { SiRenovate } from "react-icons/si";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Architecture: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-200 to-cyan-600 pb-12">
      {/* Banner */}
      <Banner
        backgroundImage={OA2}
        text={t('Architecture.bannerText')}
      />

      {/* Título */}
      <div className="text-center text-white text-3xl font-bold mt-8 mb-12">
        <h1>{t('Architecture.servicesTitle')}</h1>
      </div>

      {/* Tarjetas de servicios */}
      <div className="p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        <ServiceCard
          title={t('Architecture.sustainableTitle')}
          description={t('Architecture.sustainableDescription')}
          icon={BiSolidBuildingHouse}
        />
        <ServiceCard
          title={t('Architecture.interiorTitle')}
          description={t('Architecture.interiorDescription')}
          icon={SiRenovate}
        />
        <ServiceCard
          title={t('Architecture.landscapingTitle')}
          description={t('Architecture.landscapingDescription')}
          icon={MdEnergySavingsLeaf}
        /> 
        <ServiceCard
          title={t('Architecture.consultingTitle')}
          description={t('Architecture.consultingDescription')}
          icon={GiTreeDoor}
        />
        <ServiceCard
          title={t('Architecture.proyectTitle')}
          description={t('Architecture.proyectDescription')}
          icon={FaFileSignature}
        />
      </div>

      {/* Llamado a la acción */}
      <div className="flex flex-col items-center justify-center mt-16 py-10 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg shadow-lg mx-6 lg:mx-20">
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          {t('Architecture.ctaTitle')}
        </h2>
        <p className="text-white text-center mb-6 max-w-2xl">
          {t('Architecture.ctaDescription')}
        </p>
        <Button
          type="submit"
          className="w-full max-w-md bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {t('Architecture.ctaButton')}
        </Button>
      </div>
    </div>
  );
};

export default Architecture;
