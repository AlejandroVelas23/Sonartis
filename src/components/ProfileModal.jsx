import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../lib/hooks/useAuth';
import Button from './Button';

const ProfileModal = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div
      className={`absolute top-full right-0 w-64 sm:w-96 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
      }`}
    >
      <div className="flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close profile"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-lg text-gray-900">{user?.first_name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <p className="mt-1 text-lg text-gray-900">{user?.last_name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-lg text-gray-900">{user?.email}</p>
            </div>
            {/* Add more user data fields here as needed */}
          </div>
        </div>
        <div className="p-6 border-t sticky bottom-0 bg-white">
          <Button
            text='Logout'
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
