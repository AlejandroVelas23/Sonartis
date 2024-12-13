import React from "react";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import { FaFileSignature } from "react-icons/fa";
import OA2 from '../../assets/images/OA2.jpg'
import Button from "@/components/Button";
import { GiTreeDoor } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { SiRenovate } from "react-icons/si";
import { MdEnergySavingsLeaf } from "react-icons/md";


const Architecture = () => {
return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-blue-50 pb-12">
        
      <Banner 
      backgroundImage={OA2}
      text="Construimos sueños ayudando al planeta"
      />
      <div className="text-center text-white text-3xl font-bold mt-8">
      <h1 className="text-black">Servicios </h1>
      </div>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-justify">
        <ServiceCard
        title="Diseño Arquitectónico Sostenible"
        description="Utilizamos materiales eco-amigables y tecnologías avanzadas para minimizar el impacto ambiental, asegurando que cada proyecto no solo cumpla con tus necesidades, sino que también respete y proteja nuestro planeta"
        icon={GiTreeDoor}
        ></ServiceCard>
        <ServiceCard
        title="Planeación Urbana y Paisajismo"
        description="Nuestro equipo de expertos en planeación urbana y paisajismo se dedica a transformar espacios exteriores en entornos vibrantes y funcionales. Diseñamos soluciones innovadoras que mejoran la calidad de vida de las comunidades, integrando elementos naturales y sostenibles que fomentan la biodiversidad y la belleza natural"
        icon={BiSolidBuildingHouse}
        ></ServiceCard>
        <ServiceCard
        title="Remodelación y Renovación"
        description="Ya sea que desees renovar un espacio existente o actualizar una estructura antigua, nuestros servicios de remodelación y renovación se adaptan a tus necesidades específicas. Te ayudamos a revitalizar tu propiedad con diseños modernos y eficientes, asegurando que cada proyecto se realice con la máxima calidad y atención al detalle."
        icon={SiRenovate }
        ></ServiceCard>
        <ServiceCard
        title="Gestión de Proyectos"
        description="Coordinamos todos los aspectos del proceso constructivo para garantizar que tu proyecto se realice a tiempo, dentro del presupuesto y con los más altos estándares de calidad."
        icon={FaFileSignature}
        ></ServiceCard>
        <ServiceCard
        title="Consultoría en Eficiencia Energética"
        description="Ofrecemos consultoría en eficiencia energética para proyectos nuevos y existentes. Nuestro objetivo es reducir el consumo de energía y los costos operativos mediante la implementación de soluciones innovadoras y sostenibles, como sistemas de energía renovable y aislamiento de alta eficiencia"
        icon={MdEnergySavingsLeaf }
        ></ServiceCard>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 py-10 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg shadow-lg mx-6 lg:mx-20">
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          ¿Listo para cumplir tu sueño?
        </h2>
        <p className="text-white text-center mb-6 ">
          ¡Cotiza tu proyecto o planteanos tu problema!
        </p>
        <Button text="¡COTIZA AHORA SIN COSTO!" className="bg-white text-gray-950 hover:bg-cyan-900 hover:text-white"/>
      </div>
    </div>
  );
}

export default Architecture;