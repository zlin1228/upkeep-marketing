import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
  background: #f5f6f9;
  @media (max-width: 768px) {
    padding: 64px 0px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0px 35px;
  display: flex;
  column-gap: 30px;
  @media (max-width: 992px) {
    max-width: 840px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;
