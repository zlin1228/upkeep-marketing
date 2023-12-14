import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

import { variants } from '../../CallToAction/styles/theme.styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  padding: ${spacing[16]} ${spacing[24]};
  border: 2px solid ${color.common.transparent};
  overflow: hidden;
  transition-properties: background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      &:hover, &:focus {
        background-color: ${color.steel[25]};
        border: 2px solid ${color.steel[700]}};
        border-radius: ${spacing[8]}
      }
    `}

  .title {
    ${font('display', 'tiny-xs', '600')}
    color: ${color.darkBlue[600]};
  }

  .description {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};

    a {
      color: ${color.steel[700]};
    }
  }
`;

export const Button = styled.button`
  ${variants.Clickable}
  background-color: ${color.common.transparent};
  outline: none;
  border: none;

  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    outline: none;
    border: none;
  }
`;
