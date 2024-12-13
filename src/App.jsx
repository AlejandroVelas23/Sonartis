import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LanguageSwitcher from './components/LanguagueSwitcher';
import AppRoutes from './routes/AppRoutes';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header></Header>
        <LanguageSwitcher />
        <main className="flex-1">
          <AppRoutes/>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
