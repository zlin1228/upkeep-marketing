import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  position: relative;
  width: 100%;
  &[data-hidden='true'] {
    display: none;
  }
  svg {
    position: absolute;
    top: 12.5px;
    right: 12.5px;
    z-index: 100;
    opacity: 0.9;
    &.invalid-icon path {
      fill: rgb(153, 32, 25);
    }
    &.valid-icon path {
      fill: rgb(0, 74, 153);
    }
  }
`;
export const Label = styled.label`
  display: none;
`;
export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 8px 12px;
  margin: 0px 0px 12px;
  border-radius: 8px;
  background: ${color.common.white};
  border: 1px solid ${color.darkBlue[100]} !important;
  ${shadow('xs', 'dark')}
  ${font('text', 'sm', '400')}
    color: ${color.darkBlue[1000]};
  transition: all 250ms ease-in-out;
  &::placeholder {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
  }
  &:focus,
  &:hover {
    box-shadow: none;
  }
  &.invalid {
    color: ${color.primary[1000]};
    border-color: ${color.primary[1000]} !important;
    &::placeholder {
      color: ${color.primary[1000]};
    }
  }
`;
export const Error = styled.p`
  ${font('text', 'xs', '600')}
  color: ${color.primary[1000]};
  margin-top: ${spacing[4]};
`;
