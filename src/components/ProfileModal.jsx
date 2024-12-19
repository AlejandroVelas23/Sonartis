import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../lib/hooks/useAuth';

const ProfileModal = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="mt-20 flex flex-col h-64">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close profile"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow p-6 overflow-y-auto">
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
        <div className="p-6 border-t">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

