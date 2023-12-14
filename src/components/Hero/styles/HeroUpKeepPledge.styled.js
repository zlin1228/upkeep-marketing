import styled from 'styled-components';

import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[96]} ${spacing[0]} ${spacing[48]};

  ${atMinWidth.xl`
    padding: ${spacing[112]} ${spacing[0]} ${spacing[48]};
  `}
`;

export const OuterWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[48]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    gap: ${spacing[56]};
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    gap: ${spacing[72]};
    max-width: ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
`;

export const Text = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[16]};
  margin: ${spacing[0]} auto;

  .logo {
    width: 100%;
    max-width: 276px;
    height: 100%;
    max-height: 43px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
    text-align: center;

    ${atMinWidth.sm`
        ${font('display', 'md', '700')}
    `}

    ${atMinWidth.xl`
        ${font('display', 'xl', '700')}
    `}
  }

  .subhead,
  .subhead * {
    ${font('text', 'xl', '400')}
    color: ${color.darkBlue[600]};
    text-align: center;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.sm`
    width: fit-content;
    flex-direction: row;
  `}
`;
