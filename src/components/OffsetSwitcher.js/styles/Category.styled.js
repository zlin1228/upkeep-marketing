import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  @media (max-width: 1170px) {
    max-width: 992px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    max-width: 770px;
  }
  @media (max-width: 770px) {
    max-width: 576px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 285px 285px;
  grid-template-rows: auto;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-areas: 'card card';
  margin: 0 auto;
  padding: 0px 40px;
  @media (max-width: 992px) {
    grid-template-columns: 370px 370px;
  }
  @media (max-width: 770px) {
    grid-template-columns: 285px 285px;
  }
  @media (max-width: 577px) {
    display: flex;
    height: 100%;
    overflow: scroll;
    margin: 0px;
    padding: 32px 0;
    column-gap: 0px;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
`;
