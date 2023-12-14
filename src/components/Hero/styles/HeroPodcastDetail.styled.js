import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[96]} ${spacing[0]} ${spacing[0]};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 57.75%,
      #ffffff 100%
    ),
    linear-gradient(
      83.82deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(118, 168, 255, 0.15) 99.49%
    );

  ${atMinWidth.md`
    padding: ${spacing[96]} ${spacing[0]} ${spacing[0]};
  `}

  ${atMinWidth.xl`
    padding: ${spacing[128]} ${spacing[0]} ${spacing[0]};
 `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[64]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
 `}
`;

export const Text = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  text-align: center;
  margin: ${spacing[0]} auto;

  .eyebrow {
    ${font('overline', 'md', '700')}
    color: ${color.steel[700]};
  }

  .heading {
    ${font('display', 'md', '700')}

    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }

  .subhead {
    ${font('text', 'md', '400')}

    ${atMinWidth.xl`
      ${font('text', 'lg', '400')}
    `}
  }
`;
