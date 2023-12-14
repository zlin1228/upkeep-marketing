import styled from 'styled-components';

import { backgroundImages } from '../../../atoms/backgroundImage';

import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

const backgroundColorMap = {
  White: color.common.white,
  'DarkBlue/25': color.darkBlue[25],
  'DarkBlue/1000': color.darkBlue[1000],
  'Midnight/50': color.midnight[50],
  'Midnight/25': color.midnight[25],
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: ${props => backgroundColorMap[props.backgroundColor]};
  padding: ${spacing[48]} ${spacing[0]};
  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]};
  `}
  ${atMinWidth.xl`
    padding: ${spacing[96]} ${spacing[0]};
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImages.grid.desktop});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[40]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  z-index: 2;
  ${atMinWidth.sm`
    gap: ${spacing[48]};
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Heading = styled.div`
  width: 100%;
  margin: 0px auto;
  .heading-container {
    padding: 0px;
  }
`;

const gridMappings = {
  1: `grid-template-columns: repeat(1, 1fr);`,
  2: `grid-template-columns: repeat(2, 1fr);`,
  3: `grid-template-columns: repeat(3, 1fr);`,
  4: `grid-template-columns: repeat(4, 1fr);`,
  5: `grid-template-columns: repeat(3, 1fr);`,
  6: `grid-template-columns: repeat(3, 1fr);`,
  7: `grid-template-columns: repeat(4, 1fr);`,
  8: `grid-template-columns: repeat(4, 1fr);`,
  9: `grid-template-columns: repeat(3, 1fr);`,
  10: `grid-template-columns: repeat(4, 1fr);`,
};

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
  ${atMinWidth.xl`
     ${props => gridMappings[props.cards]}
  `}
`;
