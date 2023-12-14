import styled from 'styled-components';

import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 64px 0px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 35px;
  margin: 0px auto;
  ${atMinWidth.xl`
  gap: 70px;
  `}
`;
export const Column = styled.div`
  position: sticky;
  top: 126px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 214px;
  padding: 96px 0px;
  ${atMinWidth.xl`
    width: 35%;
  `}
  @media (min-width: 1440px) {
    width: 40%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`;
export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  ${atMinWidth.xl`
    height: 400px;
  `}
  @media (min-width: 1440px) {
    height: 500px;
  }
  .gatsby-image {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    &.active {
      opacity: 1;
    }
    img {
      object-fit: contain !important;
    }
  }
`;
