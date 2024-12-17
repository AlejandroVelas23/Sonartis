import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import Nutrition from '../pages/nutrition/Nutrition';
import Development from '@/pages/development/Development';
import Architecture from '@/pages/architecture/Architecture';
import Login from "@/pages/login/Login"
import Profile from '@/pages/profile/Profile';

const AppRoutes = () => (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development" element={<Development />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/nutrition" element={<Nutrition/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  
);

export default AppRoutes;
