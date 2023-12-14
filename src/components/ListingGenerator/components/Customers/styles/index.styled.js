import styled from 'styled-components';

import { containers } from '../../../../../atoms/containers';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[64]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[48]} ${spacing[16]};

  ${atMinWidth.sm`
    padding: ${spacing[64]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}

  ${atMinWidth.xl`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
