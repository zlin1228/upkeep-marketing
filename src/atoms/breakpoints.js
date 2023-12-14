import { css } from 'styled-components';

export const breakpoints = {
  xs: '425px',
  sm: '576px',
  md: '768px',
  lg: '834px',
  xl: '1170px',
  xxl: '1440px',
};

export const breakpointNumbers = {
  xs: 425,
  sm: 576,
  md: 768,
  lg: 834,
  xl: 1170,
  xxl: 1440,
};

/*
 * usage: ${atMinWidth.md`
 *   width: 50%;
 * `}
 */
export const atMinWidth = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
