import React from 'react';
import shortid from 'shortid';
import { Number } from '../styles/index.styled';

const PageNumber = ({
  theme,
  paginate,
  number,
  currentPage,
  prevPage,
  nextPage,
}) => {
  const pageNumber = number + 1;
  const currentPageNumber = currentPage === pageNumber;
  const prevPageNumber = prevPage === pageNumber && prevPage !== 0;
  const nextPageNumber = nextPage === pageNumber;
  const showPageNumber = currentPageNumber || prevPageNumber || nextPageNumber;
  const pagesArray = [
    nextPageNumber + 1,
    nextPageNumber + 2,
    nextPageNumber + 3,
    nextPageNumber + 4,
  ];

  if (showPageNumber || pagesArray.includes(number)) {
    return (
      <Number
        key={shortid.generate()}
        theme={theme}
        type="button"
        onClick={() => paginate(number + 1)}
        className={`page-number ${number + 1 === currentPage && 'active'}`}
      >
        {number + 1}
      </Number>
    );
  }
  return null;
};

export default PageNumber;
