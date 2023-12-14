import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  ${props =>
    props?.layout === '2x3' && `grid-template-columns: repeat(6, 1fr);`}
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
