import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #f5f6f9;
  padding: 96px 0px;
  overflow: hidden !important;
  @media (max-width: 575px) {
    padding: 64px 0px;
  }
  @media (max-width: 499px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto;
  overflow: visible;
  .slick-list {
    overflow: visible;
  }
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
  }
  .slick-slide > div {
    height: 100%;
  }
  @media (max-width: 992px) {
    .controls {
      justify-content: space-between;
      padding: 16px 64px;
    }
    .dot {
      visibility: visible;
    }
  }
  @media (max-width: 768px) {
    padding-left: 35px;
  }
  @media (max-width: 575px) {
    ${props => (props?.infinite ? `padding-left: 0px;` : `padding-left: 15px;`)}
  }
  @media (max-width: 499px) {
    padding: 0px;
    .controls {
      padding: 16px 42px;
    }
  }
`;
