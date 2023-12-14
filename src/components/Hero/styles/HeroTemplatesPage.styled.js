import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

import heroBackgroundLight from '../../../assets/background/hero-bg-light.svg';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[96]} ${spacing[0]} ${spacing[48]};
  background-image: url(${heroBackgroundLight});
  background-size: cover;
  ${atMinWidth.md`
    padding: ${spacing[128]} ${spacing[0]} ${spacing[96]};
  `}
`;

export const OuterWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[48]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.lg`
    max-width: ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: 1fr 570px;
    align-items: center;
    gap: 100px;
  `}
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};

  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.steel[700]};
  }
  .heading {
    ${font('display', 'lg', '700')}
    color: ${color.darkBlue[1000]};
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[700]};
  }
`;
export const Image = styled.div`
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
