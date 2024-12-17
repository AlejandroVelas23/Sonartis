import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import RegisterModal from './RegisterModal';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      console.log('Submitting login form:', {
        email: formData.email,
        timestamp: new Date().toISOString()
      });

      const response = await api.login({
        email: formData.email,
        password: formData.password
      });

      console.log('Login response:', {
        success: !response.error,
        hasToken: !!response.data?.token,
        timestamp: new Date().toISOString()
      });

      if (response.error) {
        throw new Error(response.error);
      }

      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/appointments');
      } else {
        throw new Error('No se recibió el token de autenticación');
      }
    } catch (err) {
      console.error('Login error:', {
        message: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
      });
      
      setError(
        err.message === 'Invalid credentials' 
          ? 'Email o contraseña incorrectos'
          : 'Error al iniciar sesión. Por favor, intenta de nuevo más tarde.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    setIsRegisterModalOpen(true);
  };

  const handleModalClose = () => {
    setIsRegisterModalOpen(false);
    setIsLogin(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Iniciar Sesión' : 'Registro'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
              {error}
            </p>
          )}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        <button 
          onClick={handleRegisterClick} 
          disabled={isLoading}
          className="mt-4 text-blue-600 hover:underline w-full text-center"
        >
          ¿No tienes una cuenta? Regístrate
        </button>
      </div>
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Login;

