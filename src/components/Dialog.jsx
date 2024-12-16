import React from 'react';

const Dialog = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg">
      <button onClick={onClose} className="float-right">&times;</button>
      {children}
    </div>
  </div>
);

export default Dialog;

