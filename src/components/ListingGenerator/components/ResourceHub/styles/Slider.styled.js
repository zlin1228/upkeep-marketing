import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
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
`;
export const Overlay = styled.div`
  width: 265px;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(
    270deg,
    #f5f6f9 8.58%,
    rgba(245, 246, 249, 0) 100.09%
  );
  z-index: 100;
  pointer-events: none;
  @media (max-width: 576px) {
    display: none;
  }
`;
