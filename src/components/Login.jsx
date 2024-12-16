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
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        const response = await api.login({
          email: formData.email,
          password: formData.password
        });
        if (response.data) {
          localStorage.setItem('token', response.data.token);
          navigate('/appointments');
        } else {
          setError(response.error || 'Error al iniciar sesión');
        }
      }
    } catch (err) {
      setError(err.message || 'Error al procesar la solicitud');
    }
  };

  const handleRegisterClick = () => {
    setIsLogin(false); // Cambia al modo de registro
    setIsRegisterModalOpen(true); // Abre el modal de registro
  };

  const handleModalClose = () => {
    setIsRegisterModalOpen(false); // Cierra el modal
    setIsLogin(true); // Asegura que volvemos a la vista de inicio de sesión
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {isLogin && (
            <button 
              type="submit" 
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Iniciar Sesión
            </button>
          )}
        </form>
        {isLogin ? (
          <button 
            onClick={handleRegisterClick} 
            className="mt-4 text-blue-600 hover:underline"
          >
            ¿No tienes una cuenta? Regístrate
          </button>
        ) : (
          <button 
            onClick={() => setIsLogin(true)} 
            className="mt-4 text-blue-600 hover:underline"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </button>
        )}
      </div>
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleModalClose} // Usa esta función para cerrar correctamente el modal
      />
    </div>
  );
};

export default Login;