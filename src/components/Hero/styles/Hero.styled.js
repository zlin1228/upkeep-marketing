/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';
import { containers } from '../../../atoms/containers';
import { backgroundImages } from '../../../atoms/backgroundImage';
import { spacing } from '../../../atoms/spacing';

import { sizes } from '../../CallToAction/styles/CallToAction.styled';

import heroBackgroundDark from '../../../assets/background/hero-bg-dark.svg';
import heroBackgroundBlue from '../../../assets/background/hero-bg-blue-angled.svg';
import heroBackgroundBlueTablet from '../../../assets/background/hero-bg-blue-angled-tablet.svg';
import heroBackgroundRed from '../../../assets/background/hero-bg-red-angled-v2.svg';
import heroBackgroundRedTablet from '../../../assets/background/hero-bg-red-angled-tablet.svg';
import heroBackgroundRedLight from '../../../assets/background/hero-bg-red-light-angled.svg';
import heroBackgroundRedLightTablet from '../../../assets/background/hero-bg-red-light-angled-tablet.svg';
import GridBackground from '../assets/grid-gray.svg';
import GridBackgroundDark from '../assets/grid-white.svg';
import DashedGrid from '../assets/dashed-grid.svg';

export const backgroundMappings = {
  Dark: `
    background-image: url(${heroBackgroundDark});
    background-color: #1A1F31;
  `,
  Light: `
    background: linear-gradient(125deg, #F2F6FC 22.27%, rgba(255, 255, 255, 0.00) 47.29%), #FFF;
  `,
  Blue: `
  background-image: url(${heroBackgroundBlue});
    background-color: #007BFF;
    @media(max-width: 992px) {
       background-image: url(${heroBackgroundBlueTablet});
    }
  `,
  Red: `
    background-image: url(${heroBackgroundRed});
    @media(max-width: 992px) {
       background-image: url(${heroBackgroundRedTablet});
    }
  `,
  'Red-Light': `
    background-image: url(${heroBackgroundRedLight});
    @media(max-width: 992px) {
       background-image: url(${heroBackgroundRedLightTablet});
    }
  `,
  Grid: `
     background: linear-gradient(
      124.65deg,
      #f2f6fc 22.27%,
      rgba(255, 255, 255, 0) 47.29%
    ),
    #ffffff;
  `,
  'Grid-Dark': `
    background: linear-gradient(
        160.13deg, 
        #376E97 5.59%, 
        #0D314A 51.47%
      ), 
      #FFFFFF;
  `,
  'Grid-DarkBlue': `
    background: linear-gradient(162.66deg, #0C2233 13.11%, #071621 61.74%), #071621;
  `,
  'Light-Gradient-Grid': `background: linear-gradient(125deg, #F2F6FC 22.27%, rgba(255, 255, 255, 0.00) 47.29%), url(${DashedGrid});`,
};

export const headingKickerMap = {
  Dark: `color: ${color.common.white};`,
  Light: `color: ${color.steel[700]};`,
  Blue: `color: ${color.common.white};`,
  Red: `color: ${color.common.white};`,
  'Red-Light': `color: ${color.primary[700]};`,
  Grid: `color: ${color.steel[700]};`,
  'Grid-Dark': `color: ${color.steel[200]};`,
  'Grid-DarkBlue': `color: ${color.steel[400]};`,
  'Light-Gradient-Grid': `color: ${color.steel[700]};`,
};

export const headingMap = {
  Dark: `color: ${color.common.white};`,
  Light: `color: ${color.darkBlue[1000]};`,
  Blue: `color: ${color.common.white};`,
  Red: `color: ${color.common.white};`,
  'Red-Light': `color: ${color.darkBlue[900]};`,
  Grid: `color: ${color.darkBlue[1000]};`,
  'Grid-Dark': `color: ${color.common.white};`,
  'Grid-DarkBlue': `color: ${color.common.white};`,
  'Light-Gradient-Grid': `color: ${color.darkBlue[1000]};`,
};

export const subheadMap = {
  Dark: `color: ${color.common.white};`,
  Light: `color: ${color.darkBlue[600]};`,
  Blue: `color: ${color.common.white};`,
  Red: `color: ${color.common.white};`,
  'Red-Light': `color: ${color.darkBlue[600]};`,
  Grid: `color: ${color.darkBlue[600]};`,
  'Grid-Dark': `color: ${color.darkBlue[100]};`,
  'Grid-DarkBlue': `color: ${color.darkBlue[100]};`,
  'Light-Gradient-Grid': `color: ${color.darkBlue[600]};`,
};

export const primaryButton = {
  Light: 'Filled - Steel',
  Blue: 'Tertiary',
  Dark: 'Primary',
  Red: 'Tertiary-Light',
  'Red-Light': 'Red',
  Grid: 'Red',
  'Grid-Dark': 'Red',
  'Grid-DarkBlue': 'Red',
  'Light-Gradient-Grid': 'Filled - Steel',
};

export const secondaryButton = {
  Light: 'Outline - Steel',
  Blue: 'Secondary-Light',
  Dark: 'Secondary-Light',
  Red: 'Secondary-Light',
  'Red-Light': 'Red-Outlined',
  Grid: 'Outline - Dark',
  'Grid-Dark': 'Filled - White',
  'Grid-DarkBlue': 'Filled - White',
  'Light-Gradient-Grid': 'Outline - Steel',
};

export const playIcon = {
  Dark: color.common.white,
  Light: color.darkBlue[600],
  Blue: color.common.white,
  Red: color.common.white,
  'Red-Light': color.darkBlue[600],
  Grid: color.darkBlue[600],
  'Grid-Dark': color.darkBlue[600],
  'Grid-DarkBlue': color.darkBlue[100],
};

export const Section = styled.section`
  position: relative;
  ${props => backgroundMappings[props.theme]}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
  padding: 110px 0px 48px 0px;
  ${({ trustBar }) =>
    trustBar &&
    css`
      padding: 110px 0px 64px;
    `}
  ${atMinWidth.lg`
    padding: 110px 0px 72px 0px;
  `}
  ${atMinWidth.xl`
    padding: 112px 0px 96px 0px;
    
      ${({ floatingTrustBar }) =>
        floatingTrustBar &&
        css`
          padding: 175px 0px 124px;
        `}
      ${({ trustBar }) =>
        trustBar &&
        css`
          padding: 175px 0px 64px;
        `}
  `}

  .card-deck-section, .card-deck-wrapper {
    padding: 0px;
  }

  ${({ theme }) =>
    theme === 'Light' &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 5px;
        background: radial-gradient(
          ellipse farthest-corner at center center,
          #007cb0 24%,
          transparent 76%
        );
      }
    `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: ${props =>
    props.theme === 'Grid'
      ? `url(${GridBackground})`
      : props.theme === 'Grid-Dark'
      ? `url(${GridBackgroundDark})`
      : `url(${backgroundImages.grid.desktop})`};
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 840px;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  z-index: 10;
  gap: ${spacing[32]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width:  ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
      ${({ featuredContent }) =>
        featuredContent && featuredContent?.__typename === 'DatoCmsWebsiteForm'
          ? css`
              grid-template-columns: 696px 1fr;
              align-items: center;
            `
          : css`
              grid-template-columns: repeat(2, 1fr);
            `}
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  ${atMinWidth.sm`
    gap: ${spacing[24]};
  `}

  ${atMinWidth.xl`
    gap: ${spacing[48]};
  `}

  ${({ featuredContent }) =>
    !featuredContent &&
    css`
      padding-bottom: 64px;
    `}
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  gap: ${spacing[16]};

  ${atMinWidth.sm`
    gap: ${spacing[24]};
  `}

  ${atMinWidth.xl`
     ${({ featuredContent }) =>
       featuredContent &&
       css`
         text-align: left;
       `}
  `}

  .heading-kicker {
    ${font('overline', 'md', '700')}
    ${props => headingKickerMap[props.theme]}
  }

  .subhead {
    display: flex;
    flex-direction: column;
    gap: ${spacing[16]};
    ${font('text', 'lg', '400')}
    ${props => subheadMap[props.theme]}

    ${atMinWidth.sm`
      gap: ${spacing[24]};
    `}

    ${atMinWidth.md`
      ${font('text', 'xl', '400')}
    `}

    h1, h2, h3, h4, h5, h6, p, span {
      ${font('text', 'lg', '400')}

      ${atMinWidth.md`
        ${font('text', 'xl', '400')}
      `}
    }

    strong {
      display: contents;
      font-weight: 700;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0px;
      margin: 0px;
      list-style: none;

      li {
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        ${font('text', 'md', '400')}

        ${atMinWidth.md`
          ${font('text', 'lg', '400')}
        `}

         &:before {
          content: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"%3E%3Crect width="24" height="24" rx="12" fill="%23007CB0"/%3E%3Cpath d="M7.5 12L10.5 15L16.5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
          left: 0px;
          width: 24px;
          height: 24px;
          transform: translateY(3px);

          ${atMinWidth.md`
            width: 28px;
            height: 28px;
          `}
        }
      }
    }
  }
`;

export const Heading = styled.h1`
  ${font('display', 'md', '700')}
  ${props => headingMap[props.theme]}

  ${atMinWidth.md`
    ${font('display', 'lg', '700')}
  `}

  ${atMinWidth.xl`
    ${({ headingSize }) => font('display', headingSize, '700')}
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  ${atMinWidth.xl`
    ${({ featuredContent }) =>
      featuredContent &&
      css`
        align-items: flex-start;
      `}
  `}
  .disclaimer {
    ${font('text', 'sm', '400')}
    ${props => subheadMap[props?.theme]};
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  ${atMinWidth.md`
    width: auto;
    flex-direction: row;
  `}
  .primary-button, .secondary-button {
    width: 100%;
    text-align: center;
    ${sizes.lg}
    ${atMinWidth.md`
      width: auto;
    `}
  }
`;

export const PlayButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background: none;
  padding: 0px;
  margin-bottom: 16px;
  ${font('text', 'md', '600')}
  ${props => subheadMap[props.theme]}
  cursor: pointer;
  opacity: 1;
  transition: all 300ms ease-in-out;
  &:focus,
  &:hover {
    background: none;
    border: none;
    outline: none;
    ${props => subheadMap[props.theme]}
    opacity: 0.35;
  }
`;

export const Media = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocalProof = styled.div`
  width: 100%;
  max-width: 575px;
  max-height: 150px;
  overflow: hidden;
`;
