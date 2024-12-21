import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://backsonartis.onrender.com/api";

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  age?: number;
  phone?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RegisterUserData {
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  password: string;
  age?: string;
  phone?: string;
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
    return fetchApi('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  register: async (userData: RegisterUserData): Promise<ApiResponse<{ token: string; user: UserData }>> => {
    return fetchApi('/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  getProfile: async (): Promise<ApiResponse<UserData>> => {
    return fetchApi('/profile');
  },

  updateProfile: async (userData: Partial<UserData>): Promise<ApiResponse<UserData>> => {
    return fetchApi('/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  getAppointments: async (): Promise<ApiResponse<any[]>> => {
    return fetchApi('/appointments');
  },
};

export default api;

