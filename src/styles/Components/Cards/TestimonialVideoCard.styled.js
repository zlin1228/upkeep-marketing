import styled, { css } from 'styled-components';
import FallbackImage from '../../../assets/testimonial-card-fallback.png';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 522px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
  ${props =>
    !props?.hasImage &&
    css`
      background-image: url(${FallbackImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
export const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: 3;
  background: none;
  outline: none;
  border: none;
  &:focus,
  &:hover {
    background: none;
    outline: none;
    border: none;
  }
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(image.png);
  filter: drop-shadow(0px 18px 58px rgba(10, 16, 34, 0.25));
  z-index: 1;
`;
export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: -1;
  .gatsby-image {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Text = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
  padding: 0px 32.5px 32.5px;
  h6 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: white;
    margin: 0px;
  }
`;
