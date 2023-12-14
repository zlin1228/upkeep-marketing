import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PageControls = ({ currentPage, posts, paginate, postsPerPage }) => {
  const firstPage = 1;
  const isPreviousPage = currentPage !== firstPage;
  const isNextPage = posts.length % postsPerPage === 0;
  return (
    <div className="page_controls">
      {isPreviousPage && (
        <button
          type="button"
          className="control previous"
          onClick={() => paginate(currentPage - 1)}
        >
          <FaChevronLeft size=".6rem" className="mr-1" /> Previous
        </button>
      )}
      {isNextPage && (
        <button
          type="button"
          className="control next"
          onClick={() => paginate(currentPage + 1)}
        >
          Next <FaChevronRight size=".6rem" className="ml-1" />
        </button>
      )}
    </div>
  );
};

export default PageControls;
