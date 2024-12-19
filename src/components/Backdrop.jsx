import React from 'react';

const Backdrop = ({ isOpen, onClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className=""
      onClick={onClick}
    />
  );
};

export default Backdrop;

