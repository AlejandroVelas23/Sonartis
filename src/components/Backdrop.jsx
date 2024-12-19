import React from 'react';

const Backdrop = ({ isOpen, onClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
      onClick={onClick}
    />
  );
};

export default Backdrop;

