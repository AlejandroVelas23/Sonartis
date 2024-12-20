import React, { ReactNode } from 'react';
import Backdrop from './Backdrop';

interface DialogProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default Dialog;
