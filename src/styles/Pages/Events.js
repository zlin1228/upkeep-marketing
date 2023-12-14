import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
`;
export const Grid = styled.section`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto;
  padding: 96px 15px;
  display: grid;
  grid-template-areas: 'filter cards';
  grid-template-columns: 270px 770px;
  grid-auto-rows: auto;
  justify-content: space-between;
  @media (max-width: 1100px) {
    grid-template-columns: 270px 1fr;
    gap: 35px;
  }
  @media (max-width: 991px) {
    grid-template-areas:
      'filter'
      'cards';
    grid-template-columns: 1fr;
    padding: 48px 15px;
  }
  @media (max-width: 499px) {
    padding: 24px 15px;
  }
`;
export const Cards = styled.div`
  grid-area: cards;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 30px;
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const NotFound = styled.div`
  grid-column: span 2;
  margin-top: 8px;
  @media (max-width: 650px) {
    grid-column: span 1;
  }
`;
export const PaginationWrapper = styled.div`
  grid-column: span 2;
  margin: 82px auto 72px auto;
  @media (max-width: 650px) {
    grid-column: span 1;
  }
  .pagination {
    margin: 0 auto;
  }
`;
