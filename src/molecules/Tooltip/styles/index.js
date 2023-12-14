import styled, { css } from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

const bgColor = {
  dark: color.darkBlue[1000],
  light: color.darkBlue[25],
};

const textColor = {
  dark: color.common.white,
  light: color.darkBlue[600],
};

const positions = {
  right: css`
    ${({ containerHeight, tooltipHeight }) =>
      `top: calc((${tooltipHeight}px - ${containerHeight}px) / -2)};`}
    left: 120%;
    left: ${({ arrow }) => (arrow ? '150%' : '120%')};
    ${({ arrow }) =>
      arrow &&
      css`
        &:after {
          content: ' ';
          position: absolute;
          top: 50%;
          right: 100%;
          margin-top: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: ${({ theme }) =>
            `transparent ${bgColor[theme]}  transparent transparent`};
        }
      `}
  `,
  left: css`
    ${({ containerHeight, tooltipHeight }) =>
      `top:calc((${tooltipHeight}px - ${containerHeight}px) / -2)};`}
    right: ${({ arrow }) => (arrow ? '150%' : '120%')};
    ${({ arrow }) =>
      arrow &&
      css`
        &:after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 100%;
          margin-top: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent transparent black;
          border-color: ${({ theme }) =>
            `transparent transparent transparent ${bgColor[theme]}`};
        }
      `}
  `,
  top: css`
    bottom: ${({ arrow }) => (arrow ? '150%' : '120%')};
    left: 50%;
    margin-left: ${({ tooltipWidth }) => `${tooltipWidth / -2}px`};
    ${({ arrow }) =>
      arrow &&
      css`
        &:after {
          content: ' ';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: black transparent transparent transparent;
          border-color: ${({ theme }) =>
            `${bgColor[theme]} transparent transparent transparent`};
        }
      `}
  `,
  'top-left': css`
    bottom: ${({ arrow }) => (arrow ? '150%' : '120%')};
    left: 50%;
    margin-left: ${({ containerWidth, tooltipWidth }) =>
      `${containerWidth - tooltipWidth}px`};
    ${({ arrow }) =>
      arrow &&
      css`
        &:after {
          content: ' ';
          position: absolute;
          top: 100%;
          left: ${({ containerWidth, tooltipWidth }) =>
            `${tooltipWidth - containerWidth}px`};
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: ${({ theme }) =>
            `${bgColor[theme]} transparent transparent transparent`};
        }
      `}
  `,
  'top-right': css`
    bottom: ${({ arrow }) => (arrow ? '150%' : '120%')};
    left: 50%;
    margin-left: ${({ containerWidth }) => `-${containerWidth}px`};
    ${({ arrow }) =>
      arrow &&
      css`
        &:after {
          content: ' ';
          position: absolute;
          top: 100%;
          left: 16px;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: ${({ theme }) =>
            `${bgColor[theme]} transparent transparent transparent`};
        }
      `}
  `,
  bottom: css`
    top: ${({ arrow }) => (arrow ? '150%' : '120%')};
    left: 50%;
    margin-left: ${({ tooltipWidth }) => `${tooltipWidth / -2}px`};
    ${({ arrow }) =>
      arrow &&
      css`
        &:after {
          content: ' ';
          position: absolute;
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: ${({ theme }) =>
            `transparent transparent ${bgColor[theme]} transparent`};
        }
      `}
  `,
};

export const TooltipText = styled.span`
  visibility: hidden;
  width: max-content;
  max-width: 150px;
  background-color: ${({ theme }) => bgColor[theme] || 'dark'};
  color: ${({ theme }) => textColor[theme] || 'dark'};
  padding: 12px;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  ${shadow('lg', 'dark')};
  ${atMinWidth.sm`
    max-width: 225px;
  `}
  ${atMinWidth.lg`
    max-width: 320px;
  `}
  ${({ position }) => positions[position]};
`;

export const Heading = styled.p`
  ${font('text', 'xs', 700)}
`;

export const Subheading = styled.p`
  ${font('text', 'xs', 500)}
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-bottom: ${({ noUnderline }) =>
    noUnderline ? 'unset' : '1px dotted black'};
  width: max-content;
  &:hover,
  &.hover ${TooltipText} {
    visibility: visible;
  }
`;
