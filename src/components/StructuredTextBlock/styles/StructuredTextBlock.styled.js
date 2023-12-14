import styled from 'styled-components';

import { font, richTextStyles } from '../../../atoms/typography';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.section`
  width: 100%;
  max-width: ${containers.md};
  margin: ${spacing[0]} auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${spacing[128]} ${spacing[16]} ${spacing[64]};
  ${richTextStyles}

  ${atMinWidth.sm`
    padding: ${spacing[128]} ${spacing[32]} ${spacing[64]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}

  h1 {
    ${font('display', 'md', '700')}
    text-align: center;

    ${atMinWidth.xl`
      ${font('richText', 'h1', '700')}
    `}
  }
`;

export const Asset = styled.div`
  width: 100%;
  height: auto;
  margin: 40px auto;
`;
