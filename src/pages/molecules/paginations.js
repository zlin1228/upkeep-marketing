import React from 'react';

import styled from 'styled-components';

import { font } from '../../atoms/typography';
import { color } from '../../atoms/colors';

import Pagination from '../../molecules/Pagination';
import usePagination from '../../molecules/Pagination/utils/usePagination';

const Paginations = () => {
  const pagination1 = usePagination({
    postsPerPage: 10,
    posts: Array.from({ length: 100 }),
  });

  const pagination2 = usePagination({
    postsPerPage: 10,
    posts: Array.from({ length: 100 }),
  });

  return (
    <>
      <Container>
        <h1>Pagination</h1>
        <Row>
          <Pagination
            theme="dark"
            currentPage={pagination1.currentPage}
            pageNumbers={pagination1.pageNumbers}
            paginate={pagination1.paginate}
          />
        </Row>
        <Row style={{ backgroundColor: color.darkBlue[1000] }}>
          <Pagination
            theme="light"
            currentPage={pagination2.currentPage}
            pageNumbers={pagination2.pageNumbers}
            paginate={pagination2.paginate}
          />
        </Row>
      </Container>
    </>
  );
};

export default Paginations;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 96px 16px;
  margin: 0px auto;

  h1 {
    ${font('display', 'xxl', 700)}
    text-decoration: underline;
  }
`;

const Row = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 32px;
  border: 1px solid ${color.darkBlue[50]};
`;
