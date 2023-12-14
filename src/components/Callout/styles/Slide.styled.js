import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Frame = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 16px;
  background: transparent;
  overflow: hidden;
  @media (min-width: 376px) {
    width: 300px;
  }
  @media (min-width: 500px) {
    width: 350px;
  }
  @media (min-width: 576px) {
    width: 440px;
  }
  @media (min-width: 992) {
    width: 470px;
  }
  &:hover {
    .heading {
      color: ${color.primary[700]};
    }
    img {
      transform: scale(1.1);
    }
  }
  .clickable {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 1000;
    outline: none;
    border: none;
    background: transparent;
    &:hover,
    &:focus {
      outline: none;
      border: none;
      background: transparent;
    }
  }
`;
export const Thumbnail = styled.div`
  background: #e4e7ec;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      overflow: hidden;
      transition: transform 0.2s;
      transform-origin: center;
      object-fit: cover !important;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Heading = styled.p`
  ${font('display', 'sm', '800')}
  color: ${color.darkBlue[900]};
  margin-bottom: 8px;
  transition: all 200ms ease-in-out;
`;
export const Subhead = styled.div`
  color: #000000;
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
`;
