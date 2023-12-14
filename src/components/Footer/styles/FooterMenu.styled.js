import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  &.desktop {
    display: none;
  }
  &.tablet {
    display: none;
  }
  &.mobile {
    display: flex;
    flex-direction: column;
  }
  ${atMinWidth.sm`
      &.desktop {
      display: none;
    }
    &.tablet {
      display: flex;
      flex-direction: column;
    }
    &.mobile {
      display: none;
    }
  `}
  ${atMinWidth.xl`
      &.desktop {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${spacing[32]};
      ${props => props.layout === 'row' && 'display: block;'}
    }
    &.tablet {
      display: none;
    }
    &.mobile {
      display: none;
    }
  `}
`;
export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
`;
export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[16]} ${spacing[32]};
`;
