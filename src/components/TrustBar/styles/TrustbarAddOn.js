import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 81px;
  overflow: hidden;
  width: 100%;
  .slick-slider {
    max-height: 81px;
    overflow: hidden;
  }
  .slick-track {
    padding: 20px 0px;
  }
`;

export const Slide = styled.div`
  display: flex !important;
  align-items: center !important;
  width: 250px;
  height: 41px;
  padding: 0px 32px;
`;

export const Image = styled.img`
  width: auto;
  max-height: 100%;
`;
