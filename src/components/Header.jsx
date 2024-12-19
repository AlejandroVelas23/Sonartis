import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguagueSwitcher';
import { useAuth } from '../lib/hooks/useAuth';
import ProfileModal from './ProfileModal';
import Backdrop from './Backdrop';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-gray-950 bg-opacity-90 text-white p-4 flex justify-between items-center z-20 text-cyan-500 relative font-bold text-lg">
        <Link to="/" className="text-1xl font-bold ml-0 hover:text-cyan-400 transition-colors">
          Sonartis S.A de C.V
        </Link>

        {/* Menu for large screens */}
        <nav className="hidden sm:flex flex-grow justify-center space-x-10 text-md">
          <NavLink
            to="/development"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500' : 'hover:underline text-white hover:text-cyan-400 transition-colors'
            }
          >
            {t('Header.NavLink1')}
          </NavLink>
          <NavLink
            to="/architecture"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500' : 'hover:underline text-white hover:text-cyan-400 transition-colors'
            }
          >
            {t('Header.NavLink2')}
          </NavLink>
          <NavLink
            to="/nutrition"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500' : 'hover:underline text-white hover:text-cyan-400 transition-colors'
            }
          >
            {t('Header.NavLink3')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500' : 'hover:underline text-white hover:text-cyan-400 transition-colors'
            }
          >
            {t('Header.NavLink5')}
          </NavLink>
        </nav>

        {/* Contact button for large screens */}
        <div className="hidden sm:flex items-center space-x-4 font-bold">
          {user ? (
            <button
              onClick={toggleProfileModal}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {user.first_name || user.email}
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'underline text-cyan-500' : 'hover:underline text-white hover:text-cyan-400 transition-colors'
              }
            >
              {t('Header.NavLink6')}
            </NavLink>
          )}
          <LanguageSwitcher />
        </div>

        {/* Hamburger icon for small screens */}
        <button
          className="sm:hidden flex flex-col items-center justify-center text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Dropdown menu for small screens */}
        <nav
          className={`sm:hidden absolute top-full left-0 w-full bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-8' : 'max-h-0 overflow-hidden'}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white hover:text-cyan-400 transition-colors text-xl'
            }
            onClick={toggleMenu}
          >
            {t('Header.NavLink1')}
          </NavLink>
          <NavLink
            to="/architecture"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white hover:text-cyan-400 transition-colors text-xl'
            }
            onClick={toggleMenu}
          >
            {t('Header.NavLink2')}
          </NavLink>
          <NavLink
            to="/nutrition"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white hover:text-cyan-400 transition-colors text-xl'
            }
            onClick={toggleMenu}
          >
            {t('Header.NavLink3')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white hover:text-cyan-400 transition-colors text-xl'
            }
            onClick={toggleMenu}
          >
            {t('Header.NavLink4')}
          </NavLink>
          {user ? (
            <button
              onClick={() => {
                toggleProfileModal();
                toggleMenu();
              }}
              className="text-white hover:text-cyan-400 transition-colors text-xl"
            >
              {user.first_name || user.email}
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'underline text-cyan-500 text-xl' : 'hover:underline text-white hover:text-cyan-400 transition-colors text-xl'
              }
              onClick={toggleMenu}
            >
              {t('Header.NavLink6')}
            </NavLink>
          )}
        </nav>
      </header>
      <ProfileModal isOpen={isProfileModalOpen} onClose={toggleProfileModal} />
      <Backdrop isOpen={isProfileModalOpen} onClick={toggleProfileModal} />
    </>
  );
};

export default Header;

