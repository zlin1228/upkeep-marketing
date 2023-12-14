import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[0]};
  ${font('text', 'lg', '700')}
  text-align: left;
  color: ${color.darkBlue[600]};
  background: transparent;
  border: none;
  outline: none;

  svg {
    transition: transform 0.3s ease-in-out;

    use {
      fill: ${color.darkBlue[600]};
    }
  }

  &:hover,
  &:focus {
    background: transparent;
    color: ${color.darkBlue[600]};
    outline: none;
  }

  &.accordion-active {
    color: ${color.common.white};
    background: transparent;

    svg {
      transform: scaleY(-1);
      transform-origin: center;

      use {
        fill: ${color.common.white};
      }
    }
  }
`;
