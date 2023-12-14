import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: ${spacing[20]} ${spacing[0]};
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.alignment === 'left' ? 'auto' : '0')};
  right: ${props => (props.alignment === 'right' ? 'auto' : '0')};
  width: 196px;
  height: 100%;
  background: ${props =>
    props.alignment === 'right'
      ? 'linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%)'
      : 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)'};
  z-index: 100;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: ${spacing[64]};
  animation: scroll 30s linear infinite;
  animation-iteration-count: 2;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 30px;

  img,
  .gatsby-image {
    height: 30px;
  }

  &.gray {
    filter: grayscale(1) brightness(0) opacity(0.3);
  }
`;
