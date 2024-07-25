interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center mt-4 space-x-2">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 border ${number === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} rounded-md`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  