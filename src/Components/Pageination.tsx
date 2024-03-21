// Purpose of this file is to display the pages at the bottom of category pages.

import { PaginationProps } from "./Types/GlobalTypes";

const Pagination = ({
  totalRecipes,
  recipesPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  // Calculate the total number of pages based on the total recipes and recipes per page
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  // Create an array of page numbers from 1 to totalPages
  const pageNumbers = [...Array(totalPages)].map((_, i) => i + 1);

  // Function to handle page change when a page number button is clicked
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination">
      {/* Map over the page numbers and render a button for each */}
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

export default Pagination;
