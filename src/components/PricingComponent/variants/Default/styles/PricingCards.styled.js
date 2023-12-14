import styled, { css } from 'styled-components';

import { containers } from '../../../../../atoms/containers';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: 0px auto;
  z-index: 2;

  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    width: fit-content;
    max-width: ${containers.xl};
    ${({ numOfCards }) => css`
      grid-template-columns: repeat(${numOfCards}, 1fr);
    `}
    justify-content: center;
  `}
`;
