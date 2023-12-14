import styled from 'styled-components';

import { containers } from '../../atoms/containers';
import { spacing } from '../../atoms/spacing';
import { atMinWidth } from '../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[96]} ${spacing[0]};

  ${atMinWidth.xl`
    padding: ${spacing[128]} ${spacing[0]};
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
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${spacing[48]};

  ${atMinWidth.xl`
    grid-template-columns: 1fr 470px;
    gap: ${spacing[72]};
  `}
`;

export const Sidebar = styled.aside`
  width: 100%;
  height: max-content;
  padding: ${spacing[24]};
  border-radius: ${spacing[12]};
  border: 2px solid rgb(236, 238, 246);
  margin: 0px auto;
`;
