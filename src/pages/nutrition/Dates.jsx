import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAuth } from '../../lib/hooks/useAuth';
import { api } from '../../lib/api';

console.log("entré a dates1")
// Simulación de nutricionistas disponibles
const nutritionists = [
  { id: 1, name: "Dr. Ana García" },
  { id: 2, name: "Dr. Carlos Rodríguez" },
  { id: 3, name: "Dra. María López" },
];

// Simulación de fechas disponibles (para el ejemplo, asumimos que todas las fechas están disponibles)
const isDateAvailable = (date) => true;

const Dates = () => {
    console.log("entré a dates2")
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    nutritionistId: '',
    appointmentDate: new Date(),
    notes: ''
  });

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        console.log('No user found, redirecting to login');
        navigate('/login');
      } else {
        console.log('User found:', user);
        setFormData(prevState => ({
          ...prevState,
          clientName: `${user.first_name} ${user.last_name}`,
          clientEmail: user.email
        }));
      }
    }
  }, [user, isLoading, navigate]);

  const handleNutritionistChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      nutritionistId: e.target.value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      appointmentDate: date
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    try {
      const response = await api.getAppointments();
      console.log('Citas:', response.data);
      alert('Procediendo con el pago...');
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Agendar Cita con Nutricionista</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                id="clientName"
                name="clientName"
                type="text"
                value={formData.clientName}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                id="clientEmail"
                name="clientEmail"
                type="email"
                value={formData.clientEmail}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="nutritionist" className="block text-sm font-medium text-gray-700">Seleccionar Nutricionista</label>
              <select
                id="nutritionist"
                name="nutritionistId"
                value={formData.nutritionistId}
                onChange={handleNutritionistChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Seleccione un nutricionista</option>
                {nutritionists.map((nutritionist) => (
                  <option key={nutritionist.id} value={nutritionist.id.toString()}>
                    {nutritionist.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Seleccionar Fecha de Cita</label>
          <Calendar
            onChange={handleDateChange}
            value={formData.appointmentDate}
            tileDisabled={({ date }) => !isDateAvailable(date)}
            className="w-full border rounded-md p-2"
          />
          <button 
            onClick={handleSubmit}
            className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Proceder con el Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dates;

