import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import { FoodList } from '../components/FoodList';
import { UserInfo } from '../components/UserInfo';
import { SearchBar } from '../components/SearchBar';
import { SlideBar } from '../components/SlideBar';
import { UnorderedListOutlined} from '@ant-design/icons';

const HomePage: React.FC = () => {
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const itemsPerPage: number = 10;

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-screen bg-[#FAEBDD]">
      <SlideBar />
      <div className="flex w-[95%] flex-col px-4">
        <div className="relative h-35">
          <div className="flex translate-y-4 transform items-center justify-center text-center text-2xl font-bold text-orange-400">
            TCDD YEMEK TARİFLERİ
          </div>
          <UserInfo />
          <SearchBar onSearch={handleSearch} />
          <div className="absolute flex flex-row gap-2 top-34 left-4 text-xl font-bold text-orange-400">
            <div><UnorderedListOutlined/></div>
            Yemek Listesi
          </div>
        </div>

        <div className="mt-12 grid grid-cols-6 rounded-3xl border border-blue-200 bg-white p-2 shadow-lg">
          <div className="text-center font-bold text-orange-400">
            YEMEK RESMİ
          </div>
          <div className="text-center font-bold text-orange-400">YEMEK ADI</div>
          <div className="text-center font-bold text-orange-400">MUTFAK</div>
          <div className="text-center font-bold text-orange-400">ZORLUK</div>
          <div className="text-center font-bold text-orange-400">KALORİ</div>
          <div className="text-center font-bold text-orange-400">İŞLEM</div>
        </div>

        <div className="p- mt-2 min-h-[1000px] overflow-hidden rounded-3xl border border-blue-200 bg-[#f8efe6] shadow-lg">
          <FoodList
            setTotalResults={setTotalResults}
            currentPage={currentPage}
            searchQuery={searchQuery}
          />
        </div>

        <div className="flex items-center justify-between p-4">
          <div>Toplam {totalResults} Sonuç Görüntüleniyor</div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalResults / itemsPerPage)}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
