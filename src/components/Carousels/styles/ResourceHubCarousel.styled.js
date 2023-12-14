import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1218px;
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
    max-width: calc(100% - 192px);
    .controls {
      justify-content: center;
    }
    .dot {
      visibility: visible;
    }
  }
  @media (max-width: 576px) {
    max-width: calc(100% - 48px);
  }
  @media (max-width: 499px) {
    max-width: calc(100% - 32px);
  }
`;
