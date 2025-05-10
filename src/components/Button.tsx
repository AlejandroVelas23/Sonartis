import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      {...(props as React.ComponentProps<typeof motion.button>)}
      className={`
        px-4 py-2 rounded-md
        bg-gradient-to-r from-blue-500 to-indigo-600
        text-white font-semibold
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        ${props.className || ''}
      `}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;

