import styled from 'styled-components';

export const Main = styled.main`
  padding: 0px;
  margin: 0;
  height: auto;
  width: 100%;
`;
export const Grid = styled.div`
  padding: 0;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1170px;
  margin: 100px auto 100px auto;
  display: grid;
  grid-template-areas:
    'cards cards cards'
    'pagination pagination pagination';
  grid-template-columns: repeat(3, 360px);
  grid-auto-rows: auto;
  gap: 30px 30px;
  padding: 0px 15px;
  @media (max-width: 1200px) {
    max-width: 991px;
    grid-template-columns: repeat(3, 310.3px);
    gap: 15px 15px;
  }
  @media (max-width: 991px) {
    max-width: 768px;
    grid-template-columns: repeat(2, 236px);
    gap: 15px 15px;
  }
  @media (max-width: 768px) {
    max-width: 500px;
    grid-template-columns: repeat(1, 146px);
    gap: 15px 15px;
  }
  @media (max-width: 500px) {
    max-width: 375px;
    grid-template-columns: repeat(1, 146px);
    gap: 15px 15px;
    margin: 50px auto 100px auto;
  }
  .grid_cards {
    display: grid;
    grid-area: cards;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 30px;
    width: 100%;
    @media (max-width: 1250px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      justify-content: center;
    }
  }
  .grid_pagination {
    grid-area: pagination;
    width: 100%;
    height: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;
