import styled, { css } from 'styled-components';

import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { containers } from '../../../../atoms/containers';

import gridBg from '../../../../assets/background/grid-gray.svg';
import { backgroundImages } from '../../../../atoms/backgroundImage';

const backgroundMap = {
  White: color.common.white,
  'DarkBlue/25': color.darkBlue[25],
  'Midnight/25': color.midnight[25],
};

export const Section = styled.div`
  position: relative;
  padding: ${spacing[40]} 0px;
  background-color: ${({ theme }) => backgroundMap[theme]};
  overflow: hidden;
  ${atMinWidth.lg`
    padding: ${spacing[72]} 0px;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[96]} 0px ${spacing[64]};
  `};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: ${({ theme }) =>
    theme === 'Midnight/25'
      ? `url(${backgroundImages.grid.desktop})`
      : `url(${gridBg})`};
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0px 17px;
  z-index: 2;
  ${atMinWidth.md`
    padding: 0 32px;
    max-width: ${containers.md};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  ${atMinWidth.md`
    margin-bottom: 40px;
  `};
  ${atMinWidth.xl`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[1000]};
  ${atMinWidth.lg`
    ${font('display', 'md', '700')}
  `}
  ${atMinWidth.xl`
    ${font('display', 'lg', '700')}
  `}
`;

export const SliderWrapper = styled.div`
  overflow: visible;
  .slick-slider {
    overflow: visible;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-track {
    overflow: visible;
    display: flex;
    gap: 32px;
    align-items: stretch;
  }
  .slick-slide {
    width: 252px;
    height: unset;
    ${atMinWidth.md`
      width: 336px;
      height: 440px;
    `}
    ${atMinWidth.xl`
      width: 384px;
      height: 440px;
    `};
  }
  .slick-slide > div {
    height: 100%;
  }
`;

export const CtaStyles = css`
  ${font('display', 'tiny-sm', '700')}
  justify-content: flex-start;
`;
