import styled, { css } from 'styled-components';

import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { spacing } from '../../../../atoms/spacing';

const backgroundColorMap = {
  light: color.common.white,
  dark: color.common.cardDarkGradient,
  'blue-hover-gradient': color.common.transparent,
};

const backgroundColorHoverMap = {
  'blue-hover-gradient':
    'linear-gradient(219.67deg, rgba(110, 160, 203, 0.3) 6.78%, rgba(216, 223, 228, 0) 102.94%)',
};

const borderColorMap = {
  light: color.mediumGrey[100],
  dark: color.steel[900],
  'blue-hover-gradient': color.common.transparent,
};

const eyebrowColorMap = {
  light: color.steel[700],
  dark: color.steel[400],
  'blue-hover-gradient': color.steel[700],
};

const headingColorMap = {
  light: color.darkBlue[1000],
  dark: color.common.white,
  'blue-hover-gradient': color.darkBlue[1000],
};

const subheadColorMap = {
  light: color.darkBlue[600],
  dark: color.darkBlue[100],
  'blue-hover-gradient': color.darkBlue[600],
};

export const linkColorMap = {
  light: 'Steel-Arrow-Link',
  dark: 'Arrow-Link-Light',
  'blue-hover-gradient': 'Link - Dark',
};

export const buttonColorMap = {
  light: 'Outline - Dark',
  dark: 'Outline - White',
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => backgroundColorMap[theme]};
  border-radius: ${spacing[8]};
  border: ${({ theme }) =>
    theme !== 'blue-hover-gradient' && `1px solid ${borderColorMap[theme]}`};
  overflow: hidden;
  transition: box-shadow 300ms ease-in-out;
  transform: translateZ(0);
  ${({ theme }) => theme === 'blue-hover-gradient' && 'padding: 24px'};

  &:hover {
    ${({ theme, cta }) =>
      theme !== 'blue-hover-gradient' &&
      cta &&
      'box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.18)'};
    background: ${({ theme }) => backgroundColorHoverMap[theme]};
  }
`;

export const Asset = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${spacing[32]};
  padding-left: ${spacing[24]};
  ${({ alignment }) =>
    alignment === 'center' &&
    css`
      justify-content: center;
      padding-left: ${spacing[0]};
    `}
`;

export const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.steel[700]};
  border-radius: 100%;
  svg {
    max-width: 20px;
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .gatsby-image-wrapper,
  img {
    width: 100%;
    max-height: 216px;
    object-position: top center;
    transition: transform 300ms ease-in-out;
    transform: ${props => (props.isHovered ? 'scale(1.03)' : 'scale(1)')};
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[24]};
  padding: ${({ theme }) =>
    theme === 'blue-hover-gradient'
      ? `${spacing[32]} ${spacing[0]} ${spacing[0]} ${spacing[0]}`
      : `${spacing[32]} ${spacing[24]}`};
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  .badge {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px ${spacing[22]};
    border: 2px solid ${color.yellow[800]};
    border-radius: ${spacing[72]};
    ${font('overline', 'md', '700')}
    color: ${color.yellow[800]};
  }
  .eyebrow {
    ${font('overline', 'md', '700')}
    color: ${({ theme }) => eyebrowColorMap[theme]};
    text-align: ${({ alignment }) => alignment === 'center' && 'center'};
  }
  .heading {
    ${font('text', 'xl', '700')}
    color: ${({ theme }) => headingColorMap[theme]};
    text-align: ${({ alignment }) => alignment === 'center' && 'center'};
  }
  .subhead {
    &,
    p {
      ${font('text', 'lg', '400')}
      color: ${({ theme }) => subheadColorMap[theme]};
      text-align: ${({ alignment }) => alignment === 'center' && 'center'};
    }
    ul,
    ol {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0px 0px 32px;
      list-style: none;
    }
    li {
      position: relative;
      ${font('text', 'lg', '400')}
      color: ${({ theme }) => subheadColorMap[theme]};
      text-align: left;
      &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 50%;
        left: -32px;
        transform: translateY(-50%);
        background-color: ${color.steel[400]};
      }
      &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        left: -33px;
        top: 50%;
        transform: translateY(-50%);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
        background-position: 6px center;
        background-size: 10px;
        background-repeat: no-repeat;
      }
    }
  }
`;
