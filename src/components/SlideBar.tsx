import React from 'react';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const SlideBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-4 mb-4 ml-8 flex w-[5%] flex-col rounded-3xl bg-[#fcd8b7] p-4">
      <div className="flex flex-col items-center justify-center gap-16 space-y-4 py-4">
        <button
          className="inline-flex items-center justify-center space-x-2 rounded p-3 hover:bg-white"
          onClick={() => navigate('/home')}
        >
          <HomeOutlined style={{ fontSize: '20px' }} />
        </button>
        <button className="inline-flex items-center justify-center space-x-2 rounded p-3 hover:bg-white">
          <SettingOutlined style={{ fontSize: '20px' }} />
        </button>
      </div>
    </div>
  );
};
