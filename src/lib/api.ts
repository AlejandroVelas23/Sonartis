import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://backsonartis.onrender.com/api";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  // Add other user properties as needed
}

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const token = localStorage.getItem('token');
    
    const defaultHeaders: HeadersInit = {
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

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error Response:', {
        status: response.status,
        data: errorData
      });
      throw new Error(errorData.message || 'Error en la petición');
    }

    const data: T = await response.json();
    return { data };
  } catch (error) {
    console.error('API Request Failed:', {
      error: (error as Error).message,
      stack: (error as Error).stack
    });
    return { error: (error as Error).message || 'Error desconocido' };
  }
}

export const api = {
  login: async (credentials: Credentials): Promise<ApiResponse<{ token: string; user: UserData }>> => {
    console.log('Attempting login with:', {
      email: credentials.email,
      timestamp: new Date().toISOString()
    });

    return fetchApi('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  register: async (userData: Partial<UserData>): Promise<ApiResponse<UserData>> => {
    return fetchApi('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  getProfile: (): Promise<ApiResponse<UserData>> =>
    fetchApi('/users/profile'),

  getAppointments: (): Promise<ApiResponse<any[]>> =>
    fetchApi('/users/appointments'),
};

export default api;

