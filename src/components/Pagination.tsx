import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex space-x-2">
        <button
          className={`rounded border px-3 py-1 ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'hover:bg-gray-100'}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        >
          Önceki
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`rounded border px-3 py-1 ${currentPage === index + 1 ? 'bg-orange-400 text-white' : 'hover:bg-gray-100'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`rounded border px-3 py-1 ${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'hover:bg-gray-100'}`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default Pagination;
