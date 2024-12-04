import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 z-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-40 text-center md:text-left">
        
        <div className='text-justify'>
          <h3 className="text-lg font-bold mb-2">Sonartis S.A de C.V</h3>
          <p>Comprometidos con la excelencia en arquitectura, desarrollo y nutrición.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2">Contacto</h3>
          <p>Email: <a href="mailto:info@sonartis.com" className="text-cyan-400 hover:underline">info@sonartis.com</a></p>
          <p>Teléfono: <a href="tel:+1234567890" className="text-cyan-400 hover:underline">+1 (234) 567-890</a></p>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
        </div>
        
      
        <div>
          <h3 className="text-lg font-bold mb-2">Síguenos</h3>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Facebook</a>
          </p>
          <p>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Twitter</a>
          </p>
          <p>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Instagram</a>
          </p>
        </div>
      </div>
      
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p>© 2024 Sonartis S.A de C.V. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
