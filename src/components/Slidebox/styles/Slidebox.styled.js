import styled, { css } from 'styled-components';

import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';

import { getPadding } from '../../../utils/getPadding';

import GridGray from '../../../assets/background/grid-gray.svg';
import GridWhite from '../../../assets/background/grid-white.svg';

// import { backgroundImages } from '../../../atoms/backgroundImage';

export const headerMap = {
  light: 'light',
  dark: 'dark',
  midnight: 'light',
};

export const backgroundMap = {
  light: css`
    background: linear-gradient(
      0deg,
      #fff 6.66%,
      rgba(255, 255, 255, 0.9) 75.57%,
      #f3f7fd 95.71%
    );
  `,
  dark: css`
    background: ${color.darkBlue[1000]};
  `,
  midnight: css`
    background: ${color.midnight[25]};
  `,
};

export const gridMap = {
  light: GridGray,
  dark: GridWhite,
  midnight: GridGray,
};

export const Section = styled.section`
  position: relative;
  width: 100%;

  ${({ theme }) => backgroundMap[theme]}

  padding: ${({ mobilePaddingTop, mobilePaddingBottom }) =>
    getPadding(mobilePaddingTop, mobilePaddingBottom, 48)};

  ${atMinWidth.md`
    padding: ${({ tabletPaddingTop, tabletPaddingBottom }) =>
      getPadding(tabletPaddingTop, tabletPaddingBottom, 72)};
  `}

  ${atMinWidth.xl`
    padding: ${({ desktopPaddingTop, desktopPaddingBottom }) =>
      getPadding(desktopPaddingTop, desktopPaddingBottom, 96)};
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: ${({ theme }) => `url(${gridMap[theme]})`};
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.lg`
    max-width: ${containers.md};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.lg};
    padding: ${spacing[0]} ${spacing[6]};
    gap: ${spacing[48]};
  `}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
`;

export const Logo = styled.div`
  height: 41px;
  margin: 0px auto;

  ${atMinWidth.sm`
    height: 51px;
  `}

  ${atMinWidth.lg`
    height: 64px;
  `}

  img, .gatsby-image {
    height: 41px;
    object-fit: contain !important;
    ${atMinWidth.sm`
      height: 51px;
    `}

    ${atMinWidth.lg`
      height: 64px;
    `}
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing[16]};

  ${atMinWidth.lg`
    flex-direction: row;
  `}
`;
