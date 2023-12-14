import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';
import { backgroundImages } from '../../../atoms/backgroundImage';

const backgroundColorMap = {
  'Light Blue': color.common.white,
  White: color.common.white,
  'Midnight/25': color.midnight[25],
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 48px 0px;
  overflow: hidden;
  background-color: ${({ backgroundColor }) =>
    backgroundColorMap[backgroundColor]};
  ${atMinWidth.sm`
    padding: 64px 0px;
  `}
  ${atMinWidth.xl`
    padding: 96px 0px;
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImages.grid.desktop});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0px auto;
  overflow: visible;
  ${atMinWidth.xl`
    max-width: 1240px;
    gap: 64px;
  `}

  /* Slider styles */
  .slick-list {
    padding: 0px;
    overflow: visible;
  }

  .slick-slide {
    width: 420px !important;
    ${atMinWidth.md`
      width: 470px !important;
    `}
    ${atMinWidth.lg`
      width: 634px !important;
    `}
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  .inline-video {
    height: auto;
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px;
  ${atMinWidth.md`
    padding-left: 32px;
    padding-right: 0px;
  `}
  ${atMinWidth.lg`
    padding-left: 0px;
    padding-right: 32px;
  `}
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding: 0px 4px;
  cursor: grab;

  .heading {
    ${font('text', 'md', '700')}
    color: ${color.darkBlue[1000]};

    ${atMinWidth.md`
      ${font('text', 'xl', '700')}
    `}
  }

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;
