import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';

export const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${spacing[4]};
  outline: none;
  background-color: ${color.common.transparent};
  color: ${color.common.transparent};
  padding: ${spacing[0]};
  margin: 0px;
  transition: outline 250ms ease-in-out;

  svg {
    width: 20px;
    height: 20px;
    overflow: visible;
    path {
      stroke: ${({ theme }) => theme};
    }
  }

  &:hover {
    border: none;
    outline: none;
    background-color: ${color.common.transparent};
    color: ${color.common.transparent};
  }

  &:focus-visible {
    outline: 4px solid ${color.steel[700]};
  }

  &.active {
    svg .top {
      transform: rotate(45deg) translate(2px, -4px);
    }

    svg .middle {
      transform: translateX(-100%);
      opacity: 0;
    }

    svg .bottom {
      transform: rotate(-45deg) translate(-8px, -1px);
    }
  }

  svg path {
    transition: all 250ms ease-in-out;
  }
`;
