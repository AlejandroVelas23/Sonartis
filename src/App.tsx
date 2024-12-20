import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './lib/hooks/useAuth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

