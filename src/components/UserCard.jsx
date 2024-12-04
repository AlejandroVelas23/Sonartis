import React from 'react';

// Componente reutilizable UserCard
const UserCard = ({ name, icon, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-lg items-center transform transition-all duration-300 hover:scale-105">
      {/* Icono centrado */}
      <div className="flex justify-center mb-4">
        {icon && (
          <div className="w-auto h-auto text-indigo-500 ">
            {React.cloneElement(icon, { className: 'w-16 h-16' })} 
          </div>
        )}
      </div>
      {/* Nombre del usuario */}
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">{name}</h2>
      {/* Descripción del usuario */}
      <p className="text-center text-gray-500 text-sm text-justify px-4">{description}</p>
    </div>
  );
};

export default UserCard;

