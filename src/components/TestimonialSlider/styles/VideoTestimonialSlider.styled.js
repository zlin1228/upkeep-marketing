import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #f5f6f9;
  padding: 96px 0px;
  overflow: hidden;
  @media (max-width: 575px) {
    padding: 64px 0px;
  }
  @media (max-width: 499px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 64px;
  margin: 0px auto;
  overflow: visible;
  .slick-list {
    overflow: visible;
  }
  @media (max-width: 768px) {
    padding-left: 35px;
  }
  @media (max-width: 575px) {
    padding-left: 15px;
  }
  @media (max-width: 499px) {
    padding: 0px;
  }
`;
