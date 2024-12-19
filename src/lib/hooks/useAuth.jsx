// This file contains the AuthContext, AuthProvider, and useAuth hook for managing authentication state
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../api'; // Updated import path

const AuthContext = createContext({
  user: null,
  login: async (email, password) => {},
  logout: () => {},
  isLoading: true
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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
      if (response.data) {
        console.log('AuthProvider: User profile fetched', response.data);
        setUser(response.data);
      } else {
        console.log('AuthProvider: No user data in response');
      }
    } catch (error) {
      console.error('AuthProvider: Error fetching user profile', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
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

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

