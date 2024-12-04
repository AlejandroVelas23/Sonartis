import React from 'react';
import Banner from '../../../src/assets/images/banner2.png';
import Arquitectura2 from '../../assets/images/Arqui2.jpg'
import FondoNutricion from '../../assets/images/bannerN.jpg'
import DVP from '../../assets/images/DVP.jpg'
import {FaUser} from 'react-icons/fa';
import Button from '../../components/Button';

import UserCard from '../../components/UserCard'
 
const Home = () => {
  return (
    <>
     <div className="flex flex-col relative ">
      <div className="flex-1 bg-cover bg-center bg-gradient-to-r from-gray-800 to-gray-600 shadow-2xl shadow-gray-900 z-10" >
      
        
        <section className="flex flex-row text-justify items-center h-full  px-12 bg-black bg-opacity-30 py-24 shadow-md">
          <div className="flex-1 p-4 text-center">
            <h2 className="text-white text-justify text-5xl font-bold mb-4 ml-24">Sonartis offers <br /> you multiple <br /> solutions</h2>
          </div>
          <div className="relative flex-1 mr-8">
            <img src={Banner} alt="Banner" className="w-full h-auto mb-4 -ml-48 shadow-lg shadow-cyan-700/30" />
            <Button
            text='Explore!'
            className='absolute -bottom-2 w-1/5 left-36'
            route={"/contact"}
            />
          </div>
        </section>
      </div>

        <div className="flex-1 bg-cover bg-center bg-gradient-to-l from-gray-800 to-gray-600 shadow-lg shadow-black">
          <section className="flex flex-row items-center py-16 px-44 bg-black bg-opacity-50">
            <img src={Arquitectura2} alt="Descripción" className="w-1/4 h-auto ml-24 drop-shadow-lg hover:drop-shadow-2xl " />
            <div className="w-1/2 p-4">
              <h2 className="ml-12 text-4xl font-bold mb-12 text-white ">Sustainable architecture</h2>
              <p className="ml-12 mb-8 text-lg text-justify text-white">At Sonartis S.A., we specialize in the creation of architectural projects oriented to sustainability and environmental care. 
                sustainability and environmental care. Our commitment is to design and build innovative spaces that 
                not only meet the functional and aesthetic needs of our clients, but also respect and protect our planet.</p>
                <Button
            text='More information'
            className="ml-12 py-2 w-1/4"
            route={"/contact"}
            /> 
            </div>
          </section>

          <section className="relative p-12 bg-gray-900 shadow-custom z-10 ">
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${FondoNutricion})` }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div className="text-center text-white p-4 w-1/2">
                  <h2 className="text-2xl font-bold mb-12">Nutritionist </h2>
                  <p className="mb-8 text-justify">At Sonartis S.A, we are committed to your health and wellness through a 
                    comprehensive and personalized approach to nutrition. Our goal is to help you improve your diet, lifestyle 
                    and prevent disease, so you can enjoy a full and healthy life.</p>
                    <Button
            text='More information'
            className="py-2 w-1/4"
            route={"/contact"}
            /> 
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-row items-center py-16 px-44 bg-black bg-opacity-50">
            
            <div className="w-1/2 p-4 ">
              <h2 className="ml-12 text-4xl font-bold mb-12 text-white  ">Development</h2>
              <p className="ml-12 mb-8 text-lg text-justify text-white w-4/6">At Sonartis S.A, we specialize in developing custom applications 
                and websites that meet the specific needs of each client. Our approach is focused on creating digital solutions that 
                are not only functional and aesthetically appealing, but also efficient and scalable.</p>
                <Button
            text='More information'
            className="ml-12 py-2 w-1/4"
            route={"/contact"}
            /> 
            </div>
            <img src={DVP} alt="Descripción" className="w-1/2 h-auto ml-24 drop-shadow-lg hover:drop-shadow-2xl " />
          </section>

          <section className="p-6 bg-gray-100 h-[32rem]">
            <h2 className="text-3xl font-bold text-center mb-6">Previous customers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[22rem]">
            <UserCard
            name={"Sarah M"}
            icon={<FaUser/>}
            description={"Working with Sonartis S.A was a fantastic experience! They developed an innovative web application for our business that exceeded our expectations. The team was professional, attentive, and always available to address our needs. Thanks to their expertise, we've seen a significant increase in user engagement and satisfaction. Highly recommend!"}/>
            <UserCard
            name={"David L"}
            icon={<FaUser/>}
            description={"We hired Sonartis S.A to create a mobile app for our service. From the initial consultation to the final product, the process was seamless and efficient. Their attention to detail and commitment to quality are truly commendable. Our app is now a crucial part of our operations, and we couldn't be happier with the results. Thank you!"}/>
            <UserCard
            name={"Emily R"}
            icon={<FaUser/>}
            description={"The team at Sonartis S.A helped us redesign our outdated website, and the transformation was incredible! They took the time to understand our vision and delivered a site that is not only visually stunning but also highly functional. Our customers have provided excellent feedback, and our online presence has never been stronger. We are thrilled with the outcome!"}/>
            <UserCard
            name={"Michael S"}
            icon={<FaUser/>}
            description={"Sonartis S.Aprovided exceptional service in developing a custom e-commerce platform for our business. Their expertise in both design and technology resulted in a user-friendly and visually appealing site that perfectly matches our brand. We've seen a noticeable increase in sales since the launch, and we credit their team for making it happen. A big thank you to everyone involved!"}/>
            
            </div>
          </section>
          
        </div>
          
        
      </div>
    </>
  );
};

export default Home;