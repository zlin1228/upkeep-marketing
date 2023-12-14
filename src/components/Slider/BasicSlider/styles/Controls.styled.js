import styled from 'styled-components';
import { color } from '../../../../atoms/colors';

export const NextButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 32px;
  border: none;
  background: transparent;
  width: max-content;
  padding: 0px;
  &:hover {
    background: none;
    svg {
      fill: ${color.steel[400]};
    }
  }
  &:active,
  &:focus {
    outline: none;
  }
  svg {
    fill: ${color.darkBlue[700]};
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border: none;
  background: transparent;
  width: max-content;
  padding: 0px;
  &:hover {
    background: none;
    svg {
      fill: ${color.steel[400]};
    }
  }
  &:active,
  &:focus {
    outline: none;
  }
  svg {
    fill: ${color.darkBlue[700]};
  }
`;

export const Dash = styled.div`
  width: 30px;
  height: 3px;
`;
