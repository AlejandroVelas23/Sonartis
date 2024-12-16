const API_BASE_URL = "https://backsonartis.onrender.com";

async function fetchApi(endpoint, options = {}) {
  try {
    const token = localStorage.getItem('token');
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error en la petición');
    }

    return { data };
  } catch (error) {
    return { error: error.message || 'Error desconocido' };
  }
}

export const api = {
  // Auth endpoints
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  },

  login: (credentials) =>
    fetchApi('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  // Appointments endpoints
  getAppointments: () =>
    fetchApi('/users/appointments'),

  // Nota: Estos endpoints no están en tu backend actual, pero los dejaremos
  // comentados por si los implementas en el futuro
  // getAvailableSlots: (date) =>
  //   fetchApi(`/appointments/available?date=${date}`),

  // createAppointment: (appointmentData) =>
  //   fetchApi('/appointments', {
  //     method: 'POST',
  //     body: JSON.stringify(appointmentData),
  //   }),
};

