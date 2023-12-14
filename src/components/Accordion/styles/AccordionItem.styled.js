import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[0]};
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[100]};
  border-radius: ${spacing[16]};
  padding: ${spacing[32]};
  cursor: pointer;
  transition-property: background-color border gap;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

  ${({ active }) =>
    active &&
    css`
      background-color: ${color.steel[800]};
      border: 1px solid ${color.midnight[50]};
      gap: ${spacing[8]};
    `}
`;

export const Text = styled.div`
  max-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
  transition-property: max-height visibility;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

  &.accordion-active {
    max-height: 500px;
    pointer-events: all;
    visibility: visible;

    & * {
      color: ${color.common.white};
    }
    a,
    a span {
      color: ${color.common.white} !important;
      text-decoration: underline;
    }
  }

  &,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & p,
  & span {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
    text-align: left;
  }

  a,
  a span {
    display: inline-block;
    color: ${color.common.white};
  }
`;
