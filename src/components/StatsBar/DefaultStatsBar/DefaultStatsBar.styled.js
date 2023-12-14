import styled, { css } from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';
import { containers } from '../../../atoms/containers';

const backgroundColors = {
  Light: color.darkBlue[25],
  Neutral: color.darkBlue[25],
  Dark: color.darkBlue[1000],
};

const headingColors = {
  Light: color.darkBlue[1000],
  Neutral: color.darkBlue[1000],
  Dark: color.common.white,
};

const textColors = {
  Light: color.darkBlue[600],
  Neutral: color.darkBlue[600],
  Dark: color.darkBlue[100],
};

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 0px 48px;
  width: 100%;
  height: 100%;
  background-color: ${props => backgroundColors[props?.theme]};
  overflow: hidden;
  margin-bottom: -1px;
  background-position: center center;
  background-size: cover;
  ${props =>
    props.theme === 'Dark'
      ? css`
          background: linear-gradient(
              180deg,
              #071621 3.96%,
              rgba(7, 22, 33, 0) 16.39%,
              rgba(7, 22, 33, 0) 86.59%,
              #071621 97.38%
            ),
            #071621;
        `
      : css`
          background: linear-gradient(
              180deg,
              #f2f6fc 3.96%,
              rgba(242, 246, 252, 0) 16.39%,
              rgba(242, 246, 252, 0) 86.59%,
              #f2f6fc 97.38%
            ),
            #f2f6fc;
        `}
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 17px;
  ${atMinWidth.md`
    padding: 0px 32px;
    max-width:${containers.md};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Header = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  h2 {
    ${font('display', 'sm', '700')}
    color: ${props => headingColors[props?.theme]};
    text-align: center;
    margin-bottom: 16px;
    ${atMinWidth.lg`
       ${font('display', 'md', '700')}
    `}
    ${atMinWidth.xl`
       ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${props => textColors[props?.theme]};
    text-align: center;
    margin-bottom: 24px;
    a {
      color: ${props => textColors[props?.theme]};
      text-decoration: underline;
    }
  }
`;

export const Gridline = styled.div`
  width: 100%;
  border-top: ${props =>
    props.theme === 'Dark'
      ? `1px solid ${color.darkBlue[800]}`
      : `1px solid ${color.darkBlue[50]}`};
`;

export const Stats = styled.div`
  display: block;
  position: relative;
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const StatWrapper = styled.div`
  position: relative;
  height: 100%;
  &:last-child {
    &:before {
      content: '';
      border-right: ${props =>
        props.theme === 'Dark'
          ? `1px solid ${color.darkBlue[800]}`
          : `1px solid ${color.darkBlue[50]}`};
      width: 0px;
      height: 1000%;
      position: absolute;
      top: -500%;
      left: 0px;
    }
    &:after {
      content: '';
      border-right: ${props =>
        props.theme === 'Dark'
          ? `1px solid ${color.darkBlue[800]}`
          : `1px solid ${color.darkBlue[50]}`};
      width: 0px;
      height: 1000%;
      position: absolute;
      top: -500%;
      right: 0px;
    }
  }
  ${atMinWidth.md`
        &:last-child {
          &:after {
            content: '';
            border-right: ${props =>
              props.theme === 'Dark'
                ? `1px solid ${color.darkBlue[800]}`
                : `1px solid ${color.darkBlue[50]}`};
            width: 0px;
            height: 300%;
            position: absolute;
            top: -100%;
            right: 0px;
          }
        }
      `}
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 260px;
  padding: 0px;
  position: static;
  padding: 24px 24px;
  background-color: ${props =>
    props.theme === 'Dark' ? color.darkBlue[1000] : color.darkBlue[25]};
  border-bottom: ${props =>
    props.theme === 'Dark'
      ? `1px solid ${color.darkBlue[8000]}`
      : `1px solid ${color.darkBlue[50]}`};
  ${atMinWidth.md`
        &:before {
          content: '';
          border-right: ${props =>
            props.theme === 'Dark'
              ? `1px solid ${color.darkBlue[800]}`
              : `1px solid ${color.darkBlue[50]}`};
          width: 0px;
          height: 300%;
          position: absolute;
          top: -100%;
          left: 0px;
        }
      `}

  ${atMinWidth.md`
    padding: 14px 32px;
  `}
  ${atMinWidth.xl`
    padding: 27px 32px;
  `}
  .stat-heading {
    ${font('display', 'lg', '700')}
    color: ${props => headingColors[props?.theme]};
    text-align: center;
    text-align: center;
    ${atMinWidth.xl`
       ${font('display', 'xxl', '700')}
    `}
  }
  .stat-description {
    ${font('text', 'lg', '400')}
    color: ${props => textColors[props?.theme]};
    text-align: center;
    margin-bottom: 0px;
  }
`;

export const TrustbarWrapper = styled.div`
  z-index: 2;
  background-color: ${props => backgroundColors[props?.theme]};
  width: 100%;
  border-style: solid;
  border-color: ${props =>
    props.theme === 'Dark' ? color.darkBlue[800] : color.darkBlue[50]};
  border-width: 1px 1px 0px 1px;
`;

export const Disclaimer = styled.div`
  color: ${props => textColors[props?.theme]};
  ${font('text', 'sm', '400')}
  background-color: ${props => backgroundColors[props?.theme]};
  z-index: 3;
  padding: 16px 0px 16px 0px;
  a {
    color: ${color.steel[400]};
  }
  max-width: 400px;
  margin: 0px auto;
  text-align: center;
`;
