import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  className?: string;
  children: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, className = '', children }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ${className}`}
    >
      <FaWhatsapp className="mr-2" />
      {children}
    </button>
  );
};

export default WhatsAppButton;

