import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { api } from '../lib/api';

// Basic Button component
const Button = ({ children, ...props }) => (
  <button 
    {...props} 
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${props.className || ''}`}
  >
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo React
  className: PropTypes.string,
};

// Basic Input component
const Input = (props) => (
  <input 
    {...props} 
    className={`w-full px-3 py-2 border border-gray-300 rounded-md ${props.className || ''}`}
  />
);
Input.propTypes = {
  className: PropTypes.string,
};

// Basic Label component
const Label = ({ children, ...props }) => (
  <label {...props} className={`block text-sm font-medium text-gray-700 ${props.className || ''}`}>
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Basic Dialog component
const Dialog = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg">
      <button onClick={onClose} className="float-right">&times;</button>
      {children}
    </div>
  </div>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired, // Valida que onClose sea una función
};

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await api.register(formData);
      console.log('Usuario registrado:', response);
      onClose();
    } catch (error) {
      console.error('Error detallado:', error);
      setError(error.message || 'Error en el registro. Por favor, intenta de nuevo.');
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog onClose={onClose}>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
        <p className="mb-4">Completa el formulario para crear una nueva cuenta.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="first_name">Nombre</Label>
            <Input
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="last_name">Apellido</Label>
            <Input
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="w-full">Registrarse</Button>
        </form>
      </div>
    </Dialog>
  );
};

export default RegisterModal;

