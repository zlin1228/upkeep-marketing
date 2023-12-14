import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  max-width: ${containers.md};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[16]};

  .eyebrow {
    ${font('overline', 'md', '700')}
    color: ${color.steel[800]};
  }

  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[1000]};

    ${atMinWidth.xl`
      ${font('display', 'lg', '700')}
    `}
  }

  .subhead,
  .subhead * {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }

  .primary-button {
    width: 100%;
    margin-top: ${spacing[16]};

    ${atMinWidth.sm`
      width: auto;
    `}
  }
`;
