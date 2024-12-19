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
      className={`absolute top-full -right-32 w-64 sm:w-96 bg-gray-900 text-white shadow-lg transform transition-all duration-300 ease-in-out z-0 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
      }`}
    >
      <div className="flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
          <h2 className="text-2xl font-semibold text-white">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Close profile"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow p-6 bg-gray-900">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <p className="mt-1 text-lg text-white">{user?.first_name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Last Name</label>
              <p className="mt-1 text-lg text-white">{user?.last_name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <p className="mt-1 text-lg text-white">{user?.email}</p>
            </div>
            {/* Add more user data fields here as needed */}
          </div>
        </div>
        <div className="p-6 border-t border-gray-700 sticky bottom-0 bg-gray-900">
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

