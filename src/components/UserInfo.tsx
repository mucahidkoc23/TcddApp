import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface User {
  image: string;
  firstName: string;
  email: string;
  phone: string;
}

export const UserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<User>('https://dummyjson.com/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('API hatası:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <>
      <div className="absolute ml-auto flex items-center justify-end space-x-1 right-8 top-14">
        <div>
          <img
            src={userInfo?.image}
            alt="Picture"
            style={{ height: 70, width: 70 }}
          />
        </div>
        <div className="flex flex-col">
          <span>{userInfo?.firstName}</span>
          <span>{userInfo?.email}</span>
          <span>{userInfo?.phone}</span>
        </div>
      </div>
      <div className="absolute top-14 right-8">
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Çıkış Yap
        </button>
      </div>
    </>
  );
};
