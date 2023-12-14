import React, { useCallback } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import PaginationButton from './components/PaginationButton';
import PaginationNumbers from './components/PaginationNumbers';

import { handleNext, handlePrev } from './utils/helpers';

import { Container } from './styles/index.styled';

const Pagination = ({ theme = 'dark', currentPage, pageNumbers, paginate }) => {
  const { t } = useTranslation();

  const showPreviousButton = currentPage > 1;
  const showNextButton = currentPage < pageNumbers.length;

  const handlePrevClick = useCallback(() => {
    handlePrev(currentPage, paginate);
  }, [currentPage, paginate]);

  const handleNextClick = useCallback(() => {
    handleNext(pageNumbers, currentPage, paginate);
  }, [pageNumbers, currentPage, paginate]);

  if (pageNumbers.length <= 1) return null;
  return (
    <Container>
      <PaginationButton
        theme={theme}
        render={showPreviousButton}
        text={t('Previous')}
        prevIcon
        handleClick={handlePrevClick}
      />
      <PaginationNumbers
        theme={theme}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        paginate={paginate}
        showNextButton={showNextButton}
      />
      <PaginationButton
        theme={theme}
        render={showNextButton}
        text={t('Next')}
        nextIcon
        handleClick={handleNextClick}
      />
    </Container>
  );
};

export default Pagination;
