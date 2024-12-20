import React from "react";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import BD from '../../assets/images/BD.jpg'
import Button from "../../components/Button";
import { FaMobileAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { FiServer } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

const Development: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-700 to-cyan-700 pb-12">
      <Banner 
        backgroundImage={BD}
        text="Innovación a la medida de tus necesidades"
      />
      <div className="text-center text-white text-3xl font-bold mt-8">
        <h1>Servicios </h1>
      </div>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-justify">
        <ServiceCard
          title="Desarrollo de aplicaciones móviles"
          description="Ofrecemos consultas nutricionales individuales donde analizamos tu estado de salud actual y tus hábitos alimenticios. Juntos, desarrollaremos estrategias y planes de acción para mejorar tu bienestar general y alcanzar tus metas de salud a largo plazo."
          icon={FaMobileAlt}
        />
        <ServiceCard
          title="Diseño y Desarrollo Web"
          description="Nuestros planes de alimentación personalizados están diseñados para satisfacer tus necesidades nutricionales únicas. Trabajamos contigo para crear un plan que se adapte a tus objetivos de salud, gustos y estilo de vida, garantizando una alimentación balanceada y deliciosa."
          icon={FiMonitor}
        />
        <ServiceCard
          title="Soluciones E-commerce"
          description="Nuestro programa de control de peso te ayuda a alcanzar y mantener un peso saludable a través de cambios sostenibles en tu dieta y estilo de vida. Te brindamos apoyo continuo y motivación para garantizar tu éxito en el camino hacia una mejor salud."
          icon={FiShoppingCart}
        />
        <ServiceCard
          title="Consultoría Tecnológica"
          description="Nuestro programa de control de peso te ayuda a alcanzar y mantener un peso saludable a través de cambios sostenibles en tu dieta y estilo de vida. Te brindamos apoyo continuo y motivación para garantizar tu éxito en el camino hacia una mejor salud."
          icon={FaArrowsDownToPeople}
        />
        <ServiceCard
          title="Desarrollo Backend y API's"
          description="Nuestro programa de control de peso te ayuda a alcanzar y mantener un peso saludable a través de cambios sostenibles en tu dieta y estilo de vida. Te brindamos apoyo continuo y motivación para garantizar tu éxito en el camino hacia una mejor salud."
          icon={FiServer}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 py-10 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg shadow-lg mx-6 lg:mx-20">
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          ¿Tienes algo en mente?
        </h2>
        <p className="text-white text-center mb-6 ">
           Contactanos para darle vida a esa idea o encontrarle solución al problema
        </p>
        <Button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            {t('Architecture.submit')}
          </Button>
      </div>
    </div>
  );
}

export default Development;

