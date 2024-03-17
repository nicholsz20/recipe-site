import React from 'react';

interface PaginationProps {
  totalRecipes: number;
  recipesPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


const Pagination = ({ totalRecipes, recipesPerPage, currentPage, setCurrentPage }: PaginationProps) => {
    const totalPages = Math.ceil(totalRecipes / recipesPerPage);
    const pageNumbers = [...Array(totalPages)].map((_, i) => i + 1);
  
   
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className='pagination'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  export default Pagination