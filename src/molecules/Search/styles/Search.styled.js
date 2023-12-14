import styled, { css } from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';

export const sizes = {
  sm: {
    container: css`
      position: relative;
      width: 100%;
      max-width: 325px;
      height: auto !important;
      border: none !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 6px 8px 16px;
      background: ${color.common.white};
      border-radius: 8px;
      ${shadow('xs', 'dark')}
      ${props =>
        props.isSearched &&
        props.isFocused &&
        `
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        .results {
          display: block;
        }
      `}
      @media (max-width: 576px) {
        max-width: 100%;
      }
    `,
    input: css`
      width: 100%;
      height: auto !important;
      border: none !important;
      outline: none;
      background: none;
      padding: 0px;
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
      &::placeholder {
        ${font('text', 'md', '400')}
        color: ${color.darkBlue[600]};
      }
    `,
    icon: css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 24px;
      height: 24px;
      background: ${color.darkBlue[50]};
      border-radius: 7px;
      svg {
        width: 20px;
        height: 14px;
      }
    `,
  },
  lg: {
    container: css`
      position: relative;
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding: 14px 14px 14px 24px;
      background: ${color.common.white};
      border-radius: 8px;
      ${shadow('xs', 'dark')}
      ${props =>
        props.isSearched &&
        props.isFocused &&
        `
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        .results {
          display: block;
        }
      `}
      @media (max-width: 576px) {
        max-width: 100%;
      }
    `,
    input: css`
      width: 100%;
      border: none !important;
      outline: none;
      background: none;
      padding: 0px;
      margin: 0px;
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[600]};
      &::placeholder {
        ${font('text', 'lg', '400')}
        color: ${color.darkBlue[600]};
      }
    `,
    icon: css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 44px;
      height: 44px;
      background: ${color.darkBlue[50]};
      border-radius: 8px;
      svg {
        width: 24px;
        height: 24px;
      }
    `,
  },
};

export const Container = styled.div`
  ${props => sizes[props.size].container}
`;
export const Label = styled.label`
  display: none;
`;
export const Input = styled.input`
  ${props => sizes[props.size].input}
`;
export const IconContainter = styled.div`
  ${props => sizes[props.size].icon}
`;
