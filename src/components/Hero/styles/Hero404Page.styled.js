import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 144px 0px 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    padding: 140px 0px 72px;
  }
  @media (max-width: 576px) {
    padding: 128px 0px 72px;
  }
  @media (max-width: 499px) {
    padding: 112px 0px 32px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 814px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    max-width: 770px;
  }
`;
