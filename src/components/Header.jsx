import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-950 bg-opacity-90 text-white p-4 flex justify-between items-center z-10 text-cyan-500">
      <div className="text-2xl font-bold ml-8">Sonartis S.A de C.V</div>
      <nav className="flex space-x-10 text-lg mr-24">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'underline text-cyan-500'
              : 'hover:underline text-white'
          }
        >
          Development
        </NavLink>
        <NavLink
          to="/architecture"
          className={({ isActive }) =>
            isActive
              ? 'underline text-cyan-500'
              : 'hover:underline text-white'
          }
        >
          Architecture
        </NavLink>
        <NavLink
          to="/nutrition"
          className={({ isActive }) =>
            isActive
              ? 'underline text-cyan-500'
              : 'hover:underline text-white'
          }
        >
          Nutrition
        </NavLink>
      </nav>
      <div className="text-lg font-bold">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'underline text-cyan-500 mr-8 rounded-md px-2'
              : 'hover:underline text-white mr-8 rounded-md px-2'
          }
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
