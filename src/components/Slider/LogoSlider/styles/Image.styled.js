import styled from 'styled-components';
import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  opacity: 0;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;
  transition: opacity 800ms ease-in;
  ${({ id, animateSlide }) => id === animateSlide && 'opacity: 1;'}
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  max-width: 145px;
  height: auto;
  padding: ${spacing[8]} ${spacing[16]};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  ${atMinWidth.lg`
    max-width: 194px;
  `}
`;
