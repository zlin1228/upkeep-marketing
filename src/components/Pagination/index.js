import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ChevronRight from './assets/ChevronRight';
import ChevronLeft from './assets/ChevronLeft';
import { Container, PageNumbers } from './styles/index.styled';
import PageNumber from './components/PageNumber';
import PageControl from './components/PageControl';

const Pagination = ({
  theme = 'dark',
  pageNumbers,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const { t } = useTranslation();
  const isNextPage = !(currentPage + 1 > pageNumbers.length);

  if (pageNumbers?.length <= 1) return null;
  return (
    <Container className="pagination">
      <PageControl
        theme={theme}
        classes={`paginate-prev ${
          prevPage !== 0 ? 'paginate-prev-active' : ''
        }`}
        clickHandler={() => paginate(currentPage - 1)}
      >
        <ChevronLeft />
        {t('Previous')}
      </PageControl>
      <PageNumbers theme={theme} className="page-numbers">
        {pageNumbers.map(number => (
          <PageNumber
            theme={theme}
            paginate={paginate}
            number={number}
            currentPage={currentPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        ))}
        <span className="elipsis">...</span>
      </PageNumbers>
      <PageControl
        theme={theme}
        classes={`paginate-next ${isNextPage ? 'paginate-next-active' : ''}`}
        clickHandler={() => paginate(currentPage + 1)}
      >
        {t('Next')}
        <ChevronRight />
      </PageControl>
    </Container>
  );
};

export default Pagination;
