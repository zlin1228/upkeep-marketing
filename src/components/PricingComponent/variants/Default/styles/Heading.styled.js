import styled from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { containers } from '../../../../../atoms/containers';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: ${containers.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing[16]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[32]} ${spacing[48]};

  ${atMinWidth.md`
     padding: ${spacing[0]} ${spacing[32]} ${spacing[72]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[0]} ${spacing[32]} ${spacing[64]};
  `}

  .heading-kicker {
    ${font('overline', 'md', '700')};
    color: ${color.steel[700]};
  }

  .heading {
    ${font('display', 'sm', '700')};
    color: ${color.darkBlue[1000]};

    ${atMinWidth.md`
      ${font('display', 'md', '700')};
    `}

    ${atMinWidth.xl`
      ${font('display', 'lg', '700')};
    `}
  }

  .subhead,
  .subhead p {
    ${font('text', 'md', '400')};
    color: ${color.darkBlue[600]};

    ${atMinWidth.md`
      ${font('text', 'lg', '400')};
    `}
  }
`;
