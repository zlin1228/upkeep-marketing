import React, { useMemo } from 'react';
import {
  Container,
  Count,
  List,
  Button,
} from '../styles/PaginationNumbers.styled';

const PaginationNumbers = ({
  theme,
  currentPage,
  pageNumbers,
  paginate,
  showNextButton,
}) => {
  const numbers = useMemo(() => {
    if (currentPage === 1) {
      return pageNumbers.slice(0, 4);
    }
    return pageNumbers.slice(currentPage - 2, currentPage + 2);
  }, [currentPage, pageNumbers]);

  return (
    <Container>
      <Count theme={theme}>
        Page <b>{currentPage}</b> of <b>{pageNumbers.length}</b>
      </Count>
      <List theme={theme}>
        {numbers.map(number => (
          <li key={number}>
            <Button
              theme={theme}
              className={currentPage === number ? 'active' : ''}
              onClick={() => paginate(number)}
            >
              {number}
            </Button>
          </li>
        ))}
        {showNextButton && <li className="elipsis">...</li>}
      </List>
    </Container>
  );
};

export default PaginationNumbers;
