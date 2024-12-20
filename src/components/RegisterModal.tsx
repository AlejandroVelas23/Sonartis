import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Input from './Input';
import Button from './Button';

interface RegisterData {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  age: string;
  phone: string;
}

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ show, onClose }) => {
  const { t } = useTranslation();
  const [registerData, setRegisterData] = useState<RegisterData>({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
  });
  const [error, setError] = useState('');

  if (!show) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí va la lógica para manejar el registro
    try {
      // Simulación de registro
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      onClose();
    } catch (error) {
      console.error('Error registering:', error);
      setError(t('register.error'));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-center mb-6">{t('register.title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="first_name"
            value={registerData.first_name}
            onChange={handleChange}
            placeholder={`${t('register.first_name')} *`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="middle_name"
            value={registerData.middle_name}
            onChange={handleChange}
            placeholder={t('register.middle_name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="last_name"
            value={registerData.last_name}
            onChange={handleChange}
            placeholder={`${t('register.last_name')} *`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="email"
            value={registerData.email}
            onChange={handleChange}
            placeholder={`${t('register.email')} *`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="password"
            type="password"
            value={registerData.password}
            onChange={handleChange}
            placeholder={`${t('register.password')} *`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="age"
            value={registerData.age}
            onChange={handleChange}
            placeholder={t('register.age')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="phone"
            value={registerData.phone}
            onChange={handleChange}
            placeholder={t('register.phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            {t('register.submit')}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterModal;