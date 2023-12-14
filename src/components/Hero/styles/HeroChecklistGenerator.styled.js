import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

import GridBackgroundLight from '../assets/grid-white.svg';
import GridBackgroundDark from '../assets/grid-gray.svg';

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[54]};
  padding: ${spacing[112]} ${spacing[0]} ${spacing[80]};
  ${atMinWidth.sm`
    gap: ${spacing[72]};
  `}
`;

export const TopBackgroundGrid = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${GridBackgroundLight});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const BottomBackgroundGrid = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${GridBackgroundDark});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 1054px;
  background: linear-gradient(160.13deg, #376e97 5.59%, #0d314a 51.47%), #ffffff;
  z-index: -1;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
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
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[24]};
  text-align: center;
  margin: ${spacing[0]} auto;

  .eyebrow {
    ${font('overline', 'lg', '700')}
    color: ${color.steel[200]};
  }

  .heading {
    ${font('display', 'md', '700')}
    color: ${color.common.white};
    ${atMinWidth.sm`
        ${font('display', 'lg', '700')}
    `}
  }

  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[100]};
    ${atMinWidth.sm`
        ${font('text', 'xl', '400')}
    `}
  }
`;
