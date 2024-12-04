import React from 'react';
import Banner from '../../../src/assets/images/banner2.png';
import Arquitectura2 from '../../assets/images/Arqui2.jpg';
import FondoNutricion from '../../assets/images/bannerN.jpg';
import DVP from '../../assets/images/DVP.jpg';
import { FaUser } from 'react-icons/fa';
import Button from '../../components/Button';
import UserCard from '../../components/UserCard';

const Home = () => {
  return (
    <>
      <div className="flex flex-col relative">

        {/* Sección de Banner */}
        <div className="flex-1 bg-cover bg-center bg-gradient-to-r from-gray-800 to-gray-600 shadow-2xl shadow-gray-900 z-10">
          <section className="flex flex-col sm:flex-row text-justify items-center h-full px-12 bg-black bg-opacity-30 py-24 shadow-md">
            <div className="flex-1 p-4 text-center">
              <h2 className="text-white text-3xl sm:text-5xl font-bold mb-4 sm:ml-24">Sonartis offers <br /> you multiple <br /> solutions</h2>
            </div>
            <div className="relative flex-1 sm:mr-8">
              <img src={Banner} alt="Banner" className="w-full h-auto mb-4 sm:-ml-48 shadow-lg shadow-cyan-700/30" />
              <Button
                text="Explore!"
                className="absolute -bottom-2 w-1/3 sm:w-1/5 left-1/4 sm:left-36"
                route="/contact"
              />
            </div>
          </section>
        </div>

        {/* Sección de Arquitectura */}
        <div className="flex-1 bg-cover bg-center bg-gradient-to-l from-gray-800 to-gray-600 shadow-lg shadow-black">
          <section className="flex flex-col sm:flex-row items-center py-16 px-8 sm:px-44 bg-black bg-opacity-50">
            <img
              src={Arquitectura2}
              alt="Descripción"
              className="w-full sm:w-1/4 h-auto sm:ml-24 drop-shadow-lg hover:drop-shadow-2xl mb-8 sm:mb-0"
            />
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Sustainable architecture</h2>
              <p className="mb-8 text-lg text-justify text-white">At Sonartis S.A., we specialize in the creation of architectural projects oriented to sustainability and environmental care.</p>
              <Button
                text="More information"
                className="py-2 w-full sm:w-1/4 sm:ml-12"
                route="/contact"
              />
            </div>
          </section>

          {/* Sección de Nutrición */}
          <section className="relative p-12 bg-gray-900 shadow-custom z-10">
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${FondoNutricion})` }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div className="text-center text-white p-4 w-3/4 sm:w-1/2">
                  <h2 className="text-2xl font-bold mb-12">Nutritionist</h2>
                  <p className="mb-8 text-justify">At Sonartis S.A, we are committed to your health and wellness through a comprehensive and personalized approach to nutrition.</p>
                  <Button
                    text="More information"
                    className="py-2 w-full sm:w-1/4"
                    route="/contact"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Sección de Desarrollo */}
          <section className="flex flex-col sm:flex-row items-center py-16 px-8 sm:px-44 bg-black bg-opacity-50">
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Development</h2>
              <p className="mb-8 text-lg text-justify text-white w-full sm:w-4/6">At Sonartis S.A, we specialize in developing custom applications and websites that meet the specific needs of each client.</p>
              <Button
                text="More information"
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

          {/* Sección de Testimonios */}
          <section className="p-6 bg-gray-100 h-[32rem]">
            <h2 className="text-3xl font-bold text-center mb-6">Previous customers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[22rem]">
              <UserCard
                name={"Sarah M"}
                icon={<FaUser />}
                description={"Working with Sonartis S.A was a fantastic experience..."}
              />
              <UserCard
                name={"David L"}
                icon={<FaUser />}
                description={"We hired Sonartis S.A to create a mobile app for our service..."}
              />
              <UserCard
                name={"Emily R"}
                icon={<FaUser />}
                description={"The team at Sonartis S.A helped us redesign our outdated website..."}
              />
              <UserCard
                name={"Michael S"}
                icon={<FaUser />}
                description={"Sonartis S.A provided exceptional service in developing a custom e-commerce platform..."}
              />
            </div>
          </section>
        </div>

      </div>
    </>
  );
};

export default Home;
