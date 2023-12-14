import styled from 'styled-components';

import { atMinWidth } from '../../../atoms/breakpoints';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Section = styled.section`
  width: 100%;
  padding-top: 100px;
  background: linear-gradient(
      125deg,
      #f2f6fc 22.27%,
      rgba(255, 255, 255, 0) 47.29%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 71.87%,
      rgba(255, 255, 255, 0.9) 71.87%
    ),
    #f2f6fc;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${atMinWidth.xl`
    padding-top: 112px;
  `}
`;

export const OuterWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: 0 ${spacing[16]};
  margin: 0 auto;

  ${atMinWidth.sm`
    padding: 0 ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[48]};

  .media {
    aspect-ratio: 16/9;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  ${atMinWidth.xl`
    flex-direction: row;
    justify-content: space-between;
    gap: ${spacing[32]};
  `};
`;

export const TextLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[16]};

  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[1000]};

    ${atMinWidth.md`
        ${font('display', 'lg', '700')}
    `}

    ${atMinWidth.xl`
        ${font('display', 'xl', '700')}
    `}
  }
`;

export const TextRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  ${atMinWidth.sm`
    align-items: flex-start;
  `}

  ${atMinWidth.xl`
    padding-top: 52px;
  `}

  .subhead, .subhead * {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};

    ${atMinWidth.xl`
        ${font('text', 'xl', '400')}
    `}
  }
`;
