import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import image from '../assets/yemek.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      console.log('API response', response);
      login(response.data.firstName, response.data.accessToken);
      navigate('/home');
    } catch {
      setError('Kullanıcı adı veya şifre hatalı');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#FAEBDD] p-6">
      <div className="hidden h-full md:block md:w-1/2">
        <img
          src={image}
          alt="Food"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-center p-6 md:w-1/2">
        <div className="w-full max-w-sm rounded-lg bg-[#FAEBDD] p-8">
          <h2 className="mb-2 text-center text-lg font-bold text-orange-600">
            TCDD YEMEK TARİFLERİ
          </h2>
          <h3 className="mb-4 text-center font-semibold text-gray-700">
            Hoşgeldiniz.
          </h3>
          <p className="mb-6 text-center text-gray-600">
            Lütfen giriş yapınız.
          </p>

          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-3 text-center text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı Adı"
                className="w-full rounded-lg border bg-[#faf0e6] p-3 placeholder-[#8a8a8a] focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                className="w-full rounded-lg border bg-[#faf0e6] p-3 placeholder-[#8a8a8a] focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg bg-orange-500 py-3 text-white transition hover:bg-orange-600 ${
                loading ? 'cursor-not-allowed opacity-70' : ''
              }`}
            >
              {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Şifremi Unuttum
            </a>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            TCDD YEMEK TARİFLERİ SİTESİ
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
