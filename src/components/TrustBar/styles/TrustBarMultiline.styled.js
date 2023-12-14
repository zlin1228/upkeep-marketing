import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';
import { shadow } from '../../../atoms/shadows';

export const Section = styled.section`
  width: 100%;
  padding: 48px 0px;
  background: ${color.common.white};
  ${atMinWidth.md`
    padding: 64px 0px;
  `}
  ${atMinWidth.xl`
    padding: 72px 0px;
  `}
`;

export const HeadingWrapper = styled.div`
  padding: 0px 30px;
`;

export const Sliders = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 48px auto 0px auto;
  padding: 0px 2px;
  .slick-track {
    margin: 16px 0px;
  }
  .slick-slide {
    margin: 0px 16px;
  }
`;

export const SliderItem = styled.a`
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 56px;
  border-radius: 50px;
  padding: 8px 16px;
  ${font('display', 'sm', '600')}
  color: ${color.common.black};
  background: ${color.common.white};
  ${shadow('sm', 'dark')}
  border-radius: 50px;
  &:hover {
    color: ${color.common.black};
    background: ${color.common.white};
    ${shadow('sm', 'dark')}
  }
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const OverlayLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(0deg);
  pointer-events: none;
  z-index: 100;
  width: 50px;
  ${atMinWidth.lg`
    width: 75px;
  `}
  ${atMinWidth.xl`
    width: 150px;
  `}
`;

export const OverlayRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom 0;
  background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  transform: rotate(180deg);
  pointer-events: none;
  z-index: 100;
  width: 50px;
  ${atMinWidth.lg`
    width: 75px;
  `}
    ${atMinWidth.xl`
    width: 150px;
  `}
`;
