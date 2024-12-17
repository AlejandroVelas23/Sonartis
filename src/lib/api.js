const API_BASE_URL = import.meta.env.VITE_API_URL || "https://backsonartis.onrender.com/api";

async function fetchApi(endpoint, options = {}) {
  try {
    const token = localStorage.getItem('token');
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    // Add credentials and mode to ensure CORS works properly
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      mode: 'cors',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: 'Error en la petición'
      }));
      throw new Error(errorData.message || 'Error en la petición');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API Error:', error);
    return { error: error.message || 'Error desconocido' };
  }
}

export const api = {
  // Auth endpoints
  register: async (userData) => {
    return fetchApi('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login: (credentials) =>
    fetchApi('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  getProfile: () =>
    fetchApi('/users/profile'),

  // Appointments endpoints
  getAppointments: () =>
    fetchApi('/users/appointments'),
};

export default api;

