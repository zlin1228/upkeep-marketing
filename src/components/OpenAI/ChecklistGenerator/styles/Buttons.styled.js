import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[12]};
`;

export const IconButton = styled.button`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[1000]};
  border-radius: ${spacing[8]};
  outline: none;
  padding: ${spacing[0]};
  overflow: visible;
  transition-properties: border, background;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  svg path {
    transition: stroke 250ms ease-in-out;
  }

  &:hover {
    background: ${color.darkBlue[1000]};
    border: 1px solid ${color.darkBlue[1000]};
    outline: none;

    svg path {
      stroke: ${color.common.white};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[8]};
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[1000]};
  border-radius: ${spacing[72]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  outline: none;
  padding: ${spacing[8]} ${spacing[14]};
  ${font('display', 'tiny-xs', '700')}
  color: ${color.darkBlue[1000]};
  transition-properties: border, background;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  svg path {
    transition: stroke 250ms ease-in-out;
  }

  &:hover {
    color: ${color.common.white};
    background: ${color.darkBlue[1000]};
    border: 1px solid ${color.darkBlue[1000]};
    outline: none;

     svg path {
      stroke: ${color.common.white};
    }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: -59%;
  right: -360%;
  white-space: nowrap;
  background-color: ${color.common.white};
  border: 1px solid ${color.darkBlue[50]};
  ${font('text', 'xs', '700')}
  color: ${color.darkBlue[1000]};
  padding: ${spacing[6]} ${spacing[8]};
  border-radius: ${spacing[6]};
  z-index: 10;
  ${shadow('xl', 'dark')}
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms ease-in-out;

  &.visible {
    opacity: 1;
  }
`;
