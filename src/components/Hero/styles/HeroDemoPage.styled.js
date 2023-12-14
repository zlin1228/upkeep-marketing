import styled, { css } from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

import BackgroundXl from '../assets/demo-hero-bg-xl.png';
import BackgroundLg from '../assets/demo-hero-bg-lg.png';
import BackgroundMd from '../assets/demo-hero-bg-md.png';
import BackgroundSm from '../assets/demo-hero-bg-sm.png';
import GridBackground from '../assets/grid-gray.svg';

const containerStyles = {
  light: css`
    background: linear-gradient(
        124.65deg,
        #f2f6fc 22.27%,
        rgba(255, 255, 255, 0) 47.29%
      ),
      #ffffff;
    padding-bottom: 52px;
  `,
  dark: css`
    background-image: url(${BackgroundSm});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    ${atMinWidth.sm`
        padding-bottom: 104px;
        background-image: url(${BackgroundMd});
      `}
    ${atMinWidth.md`
        padding-bottom: 152px;
        background-image: url(${BackgroundLg});
      `}
      ${atMinWidth.xl`
        gap: 64px;
        padding-bottom: 228px;
        background-image: url(${BackgroundXl});
      `}
  `,
};

const headingMap = {
  light: color.darkBlue[1000],
  dark: color.common.white,
};

const headingKickerMap = {
  light: color.darkBlue[1000],
  cdark: color.common.white,
};

const textMap = {
  light: color.darkBlue[700],
  dark: color.darkBlue[100],
};

const socialProofTextMap = {
  light: color.darkBlue[600],
  dark: color.darkBlue[100],
};

const listItemMap = {
  light: color.steel[400],
  dark: color.primary[700],
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${props => containerStyles[props.theme]}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${GridBackground});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Header = styled.header`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadingWrapper = styled.div`
  max-width: 506px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 32px;
  z-index: 100;
  ${atMinWidth.lg`
    max-width: 770px;
  `}
  ${atMinWidth.xl`
    max-width: 907px;
     margin-bottom: 64px;
  `}
    .heading-kicker {
    ${font('overline', 'lg', '700')}
    color: ${props => headingKickerMap[props.theme]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${props => headingMap[props.theme]};
    ${atMinWidth.md`
      ${font('display', 'lg', '700')}
    `}
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  ${atMinWidth.xl`
    gap: 88px;
  `}
  .social-proof {
    ${atMinWidth.sm`
      align-items: flex-start;
      justify-content: flex-start;
    `}
  }
  .social-proof-logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    ${atMinWidth.sm`
      display: flex;
      justify-content: flex-start;
      gap: 30px;
    `}
    img {
      width: 100%;
      max-height: 23px;
      ${atMinWidth.sm`
        width: fit-content;
        max-height: 23px;
      `}
    }
  }
  .social-proof p {
    color: ${props => socialProofTextMap[props.theme]};
  }
  .trustbar-wrapper {
    padding: 0px;
  }
  .trustbar-container {
    gap: 32px;
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 19px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 570px 1fr;
    gap: 131px;
  `}
`;
export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 100;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Subhead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${font('text', 'lg', '400')}
  color: ${props => textMap[props.theme]};
  strong {
    display: contents;
    ${font('text', 'lg', '600')}
  }
  p {
    margin-bottom: 0px;
    img {
      width: 100%;
      height: auto;
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px;
    margin: 0px;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      padding: 0px;
      ul > li {
        font-size: 0.8rem;
        position: relative;
        list-style: circle;
      }
    }
  }
  & > ul > li {
    padding-left: 36px;
    position: relative;
    line-height: 24px;
    svg {
      stroke: #007bff;
    }
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 0;
      top: 4px;
      background-color: ${props => listItemMap[props.theme]};
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -1.5px;
      top: 4px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 10px;
      background-repeat: no-repeat;
    }
    ul {
      padding: 0;
    }
  }
`;
