import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';

import { backgroundImages } from '../../../atoms/backgroundImage';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[48]} ${spacing[0]};
  background-color: ${color.darkBlue[25]};
  background-image: url(${backgroundImages.grid.desktop});

  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[96]} ${spacing[0]};
  `};
`;

export const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  ${atMinWidth.sm`
    gap: ${spacing[40]};
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};

  ${atMinWidth.sm`
    gap: ${spacing[40]};
  `}
`;
