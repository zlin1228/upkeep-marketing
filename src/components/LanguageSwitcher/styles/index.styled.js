import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Button = styled.button`
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[12]};
  padding: ${spacing[12]};
  background-color: ${color.common.transparent};
  border: none;
  border-radius: ${spacing[8]};
  outline: none;
  ${font('text', 'sm', '700')}
  color: ${color.darkBlue[900]};
  transition: outline 250ms ease-in-out;

  svg use {
    transition-property: fill, color;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    background-color: ${color.common.transparent};
    color: ${color.steel[700]};

    svg use {
      fill: ${color.steel[700]};
      color: ${color.steel[700]};
    }
  }

  &:focus-visible {
    outline: 4px solid ${color.steel[700]};
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0px;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  background-color: ${color.common.white};
  border: 1px solid ${color.darkBlue[50]};
  border-radius: 10px;
  ${shadow('xl', 'dark')}
  overflow: hidden;
  list-style: none;
  z-index: 9999;

  ${atMinWidth.md`
    top: 44px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  `}

  li {
    width: 100%;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      text-align: left;
      ${font('text', 'sm', '700')}
      color: ${color.darkBlue[1000]};
      &:hover {
        background-color: ${color.darkBlue[25]};
      }
    }
  }
`;
