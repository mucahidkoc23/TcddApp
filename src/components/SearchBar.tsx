import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="absolute top-33 right-8 flex w-1/3 items-center rounded-lg border bg-[#fff9f5] p-2">
      <SearchOutlined
        style={{ fontSize: '20px', color: 'orange' }}
        className="text-gray-500"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Yemek Ara..."
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};
