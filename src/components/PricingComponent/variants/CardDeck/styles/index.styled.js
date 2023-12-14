import styled from 'styled-components';

import { spacing } from '../../../../../atoms/spacing';
import { containers } from '../../../../../atoms/containers';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[48]} ${spacing[0]};

  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[96]} ${spacing[0]};
  `}
`;

export const OuterWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
    gap: ${spacing[48]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  ${atMinWidth.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[40]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    grid-template-columns: repeat(${({ numOfCards }) => numOfCards}, 1fr);
    gap: ${spacing[0]} ${spacing[32]};
  `}
`;
