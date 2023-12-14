import styled, { css } from 'styled-components';

import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;

  ${({ reverse }) =>
    reverse &&
    css`
      ${atMinWidth.xl`
        order: 1;
      `}
    `}

  ${({ layout, reverse }) =>
    layout === 'full-width' &&
    css`
      justify-content: ${reverse ? 'flex-end' : 'flex-start'};
      .gatsby-image-wrapper,
      .gatsby-image-wrapper img {
        ${atMinWidth.xl`
          max-height: 686px;
          object-position: ${reverse ? 'right' : 'left'};
        `}
      }
    `}
`;
