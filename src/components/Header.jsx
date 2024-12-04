import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-950 bg-opacity-90 text-white p-4 flex justify-between items-center z-20 text-cyan-500 relative">
      <div className="text-2xl font-bold ml-8">Sonartis S.A de C.V</div>

      {/* Menú para pantallas grandes */}
      <nav className="hidden sm:flex flex-grow justify-center space-x-10 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500' : 'hover:underline text-white'
          }
        >
          Development
        </NavLink>
        <NavLink
          to="/architecture"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500' : 'hover:underline text-white'
          }
        >
          Architecture
        </NavLink>
        <NavLink
          to="/nutrition"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500' : 'hover:underline text-white'
          }
        >
          Nutrition
        </NavLink>
      </nav>

      {/* Botón de Contacto para pantallas grandes */}
      <div className="hidden sm:block text-lg font-bold mr-8">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500' : 'hover:underline text-white'
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Icono de hamburguesa para pantallas pequeñas */}
      <button
        className="sm:hidden flex flex-col items-center justify-center text-2xl"
        onClick={toggleMenu}
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1'}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Menú desplegable para pantallas pequeñas */}
      <nav
        className={`sm:hidden absolute top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 mt-16 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white text-xl'
          }
          onClick={toggleMenu}
        >
          Development
        </NavLink>
        <NavLink
          to="/architecture"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white text-xl'
          }
          onClick={toggleMenu}
        >
          Architecture
        </NavLink>
        <NavLink
          to="/nutrition"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white text-xl'
          }
          onClick={toggleMenu}
        >
          Nutrition
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white text -xl'
          }
          onClick={toggleMenu}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;