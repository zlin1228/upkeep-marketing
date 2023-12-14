import styled from 'styled-components';

import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

import GridBackground from '../assets/grid-gray.svg';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[96]} ${spacing[0]} ${spacing[48]};
  ${atMinWidth.md`
    padding: ${spacing[96]} ${spacing[0]};
  `}
  ${atMinWidth.xl`
    padding: ${spacing[128]} ${spacing[0]} ${spacing[96]};
  `}
`;
export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${GridBackground});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
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
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 16px;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.steel[700]};
  }
  .heading {
    ${font('display', 'lg', '700')}
    color: ${color.darkBlue[1000]};
    ${atMinWidth.md`
      ${font('display', 'xl', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    ${atMinWidth.md`
      ${font('text', 'xl', '400')}
    `}
  }
`;
