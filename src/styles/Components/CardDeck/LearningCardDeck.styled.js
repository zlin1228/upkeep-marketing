import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #fafcff;
  padding: 96px 0px;
  @media (max-width: 992px) {
    padding: 64px 0px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const Header = styled.div`
  width: 100%;
  max-width: 1030px;
  height: auto;
  text-align: center;
  margin: 0px auto 64px;
  padding: 0px 30px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    .learning-card:last-child {
      display: none;
    }
  }
`;
