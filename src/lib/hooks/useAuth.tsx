import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../api';

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  isLoading: true
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('AuthProvider: Checking for token');
    const token = localStorage.getItem('token');
    if (token) {
      console.log('AuthProvider: Token found, checking auth');
      checkAuth();
    } else {
      console.log('AuthProvider: No token found');
      setIsLoading(false);
    }
  }, []);

  const checkAuth = async () => {
    try {
      console.log('AuthProvider: Fetching user profile');
      const response = await api.getProfile();
      console.log('AuthProvider: Response received', response.data);
      if (response.data) {
        setUser(response.data);
      } else {
        console.log('AuthProvider: No user data in response');
      }
    } catch (error) {
      console.error('AuthProvider: Error fetching user profile', error);
    } finally {
      setIsLoading(false);
      console.log('AuthProvider: Finished loading');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.login({ email, password });
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
      } else {
        throw new Error(response.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

