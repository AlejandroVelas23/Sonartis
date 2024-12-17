const API_BASE_URL = import.meta.env.VITE_API_URL || "https://backsonartis.onrender.com/api";

async function fetchApi(endpoint, options = {}) {
  try {
    const token = localStorage.getItem('token');
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    console.log('Making API request:', {
      url: `${API_BASE_URL}${endpoint}`,
      method: options.method || 'GET',
      headers: defaultHeaders
    });

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      mode: 'cors',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error('Unexpected response format:', {
        status: response.status,
        contentType,
        body: text
      });
      throw new Error('Formato de respuesta inesperado del servidor');
    }

    if (!response.ok) {
      console.error('API Error Response:', {
        status: response.status,
        data
      });
      throw new Error(data.message || 'Error en la petición');
    }

    return { data };
  } catch (error) {
    console.error('API Request Failed:', {
      error: error.message,
      stack: error.stack
    });
    return { error: error.message || 'Error desconocido' };
  }
}

export const api = {
  login: async (credentials) => {
    console.log('Attempting login with:', {
      email: credentials.email,
      timestamp: new Date().toISOString()
    });

    return fetchApi('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  register: async (userData) => {
    return fetchApi('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  getProfile: () =>
    fetchApi('/users/profile'),

  // Appointments endpoints
  getAppointments: () =>
    fetchApi('/users/appointments'),
};

export default api;

