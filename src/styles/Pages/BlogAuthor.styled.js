import styled from 'styled-components';

import { color } from '../../atoms/colors';
import { spacing } from '../../atoms/spacing';
import { containers } from '../../atoms/containers';
import { atMinWidth } from '../../atoms/breakpoints';
import { font } from '../../atoms/typography';

export const Section = styled.section`
  width: 100%;
  background-color: ${color.darkBlue[1000]};
  padding: ${spacing[96]} ${spacing[0]} ${spacing[48]};

  ${atMinWidth.md`
    padding: ${spacing[128]} ${spacing[0]} ${spacing[96]};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.lg`
    max-width: ${containers.xl};
  `}

  .heading-kicker {
    ${font('overline', 'md', '700')};
    color: ${color.steel[400]};
  }
  .heading {
    ${font('display', 'lg', '700')};
    color: ${color.common.white};
  }
`;
