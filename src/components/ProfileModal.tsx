import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../lib/hooks/useAuth';
import Dialog from './Dialog';
import Input from './Input';
import Button from './Button';

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string;
}

const ProfileModal: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<ProfileData>({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Dialog show={show} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">{t('profile.title')}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label={t('profile.firstName')}
          name="first_name"
          value={profileData.first_name}
          onChange={handleChange}
        />
        <Input
          label={t('profile.lastName')}
          name="last_name"
          value={profileData.last_name}
          onChange={handleChange}
        />
        <Input
          label={t('profile.email')}
          name="email"
          type="email"
          value={profileData.email}
          onChange={handleChange}
        />
        <div className="flex justify-end mt-4">
        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              {t('profile.save')}
            </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default ProfileModal;

