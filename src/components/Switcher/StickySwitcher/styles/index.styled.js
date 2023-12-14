import styled from 'styled-components';

import { spacing } from '../../../../atoms/spacing';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[32]} ${spacing[0]} ${spacing[48]};
  background-color: ${({ theme }) =>
    theme === 'Dark' ? color.darkBlue[1000] : color.midnight[25]};

  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[96]} ${spacing[0]};
  `}
`;

export const Slides = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;
