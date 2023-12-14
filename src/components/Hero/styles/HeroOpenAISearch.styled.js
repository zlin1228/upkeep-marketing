import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

import GridBackground from '../../../assets/background/grid-gray.svg';

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: ${spacing[112]} ${spacing[0]} ${spacing[32]};
  background-color: ${color.darkBlue[25]};
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 710px;
  background: linear-gradient(
      124.65deg,
      #f2f6fc 22.27%,
      rgba(255, 255, 255, 0) 47.29%
    ),
    #ffffff;
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
  position: relative;
  width: 100%;
  max-width: ${containers.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  z-index: 2;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.sm`
     max-width: ${containers.xl};
  `}
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[56]};
`;

export const Text = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${spacing[24]};
  margin: ${spacing[0]} auto;
  .eyebrow {
    ${font('overline', 'lg', '700')}
    color: ${color.steel[700]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[1000]};
    ${atMinWidth.sm`
      ${font('display', 'lg', '700')}
    `}
    ${atMinWidth.lg`
      ${font('display', 'xl', '700')}
    `}
  }
  .subhead,
  .subhead p {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    ${atMinWidth.sm`
      ${font('text', 'xl', '400')}
    `}
  }
`;
