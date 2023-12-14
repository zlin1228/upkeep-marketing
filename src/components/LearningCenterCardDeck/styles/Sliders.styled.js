import styled from 'styled-components';

import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    gap: ${spacing[40]};
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[32]};

  .arrows {
    display: flex;
    align-items: center;
    gap: ${spacing[8]};

    button {
      border: none;
      background-color: transparent;
      outline: none;
    }
  }

  .dots {
    display: flex;
    align-items: center;
    gap: ${spacing[0]};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      padding: ${spacing[4]};
      background-color: ${color.common.transparent};

      &::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background-color: ${color.steel[100]};
        border-radius: 46px;
        transition: all 150ms ease-in-out;
        transform-origin: right;
      }

      &.active {
        &::before {
          content: '';
          width: 80px;
          height: 8px;
          background-color: ${color.steel[700]};
        }
      }
    }
  }
`;
