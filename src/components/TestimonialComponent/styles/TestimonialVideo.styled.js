import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  background: #f5f6f9;
  @media (max-width: 768px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: auto;
  padding: 0px 35px;
  margin: 0px auto;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 992px) {
    max-width: 770px;
    grid-template-columns: repeat(1, 1fr);
    gap: 43px;
    margin: 0px auto;
  }
  @media (max-width: 575px) {
    gap: 28px;
  }
`;
