import React from "react";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import { FaCalendarAlt, FaFileSignature } from "react-icons/fa";
import Bn from '../../assets/images/BN.jpg'
import Button from "@/components/Button";
import { GiFruitBowl } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const Nutrition = () => {
  const navigate = useNavigate();
return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 to-emerald-900 pb-12">
        
      <Banner 
      backgroundImage={Bn}
      text="Transforma tu vida con una alimentación saludable"
      />
      <div className="text-center text-white text-3xl font-bold mt-8">
      <h1>Servicios </h1>
      </div>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-justify">
        <ServiceCard
        title="Consulta Personalizada"
        description="Ofrecemos consultas nutricionales individuales donde analizamos tu estado de salud actual y tus hábitos alimenticios. Juntos, desarrollaremos estrategias y planes de acción para mejorar tu bienestar general y alcanzar tus metas de salud a largo plazo."
        icon={FaCalendarAlt}
        ></ServiceCard>
        <ServiceCard
        title="Planes de alimentación"
        description="Nuestros planes de alimentación personalizados están diseñados para satisfacer tus necesidades nutricionales únicas. Trabajamos contigo para crear un plan que se adapte a tus objetivos de salud, gustos y estilo de vida, garantizando una alimentación balanceada y deliciosa."
        icon={GiFruitBowl}
        ></ServiceCard>
        <ServiceCard
        title="Asesoría en Control de Peso"
        description="Nuestro programa de control de peso te ayuda a alcanzar y mantener un peso saludable a través de cambios sostenibles en tu dieta y estilo de vida. Te brindamos apoyo continuo y motivación para garantizar tu éxito en el camino hacia una mejor salud."
        icon={FaFileSignature}
        ></ServiceCard>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 py-10 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg shadow-lg mx-6 lg:mx-20">
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          ¿Listo para transformar tu salud?
        </h2>
        <p className="text-white text-center mb-6 ">
          Agenda una cita con nosotros y da el primer paso hacia una vida más saludable.
        </p>
        <Button text="¡AGENDA TU CITA!" className="bg-white text-gray-950 hover:bg-cyan-900 hover:text-white"/>
        <Button
          text="¡VER CITAS!"
          className="bg-white text-gray-950 hover:bg-cyan-900 hover:text-white"
          onClick={() => navigate('/login')} // Navega a la página de citas
        />
      </div>
    </div>
  );
}

export default Nutrition;