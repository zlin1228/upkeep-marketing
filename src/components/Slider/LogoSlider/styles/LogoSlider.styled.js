import styled from 'styled-components';
import { spacing } from '../../../../atoms/spacing';
import { atMinWidth } from '../../../../atoms/breakpoints';
import DashedGridBackground from '../assets/grid.svg';

export const Section = styled.section`
  position: relative;
  padding: ${spacing[48]} 0;
  ${atMinWidth.lg`
    padding: ${spacing[72]} 0;
  `}
  ${atMinWidth.xl`
     padding: ${spacing[96]} 0;
  `}
`;
export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${DashedGridBackground});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1;
`;

export const SliderWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  width: 100%
  margin: 0 auto;
  z-index: 2;
  ${atMinWidth.lg`
    margin: 0 auto;
    max-width: 735px;
  `}
  ${atMinWidth.xl`
    max-width: 1248px;
  `}

`;

export const Slide = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: ${spacing[32]};
  z-index: 2;
  padding: 0 ${spacing[16]};
  ${atMinWidth.xl`
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    min-height: 200px;
  `}
`;
