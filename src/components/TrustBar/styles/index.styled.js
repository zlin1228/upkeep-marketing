import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';
import { getPadding } from '../../../utils/getPadding';
import { backgroundImages } from '../../../atoms/backgroundImage';

export const backgroundColors = {
  White: `background: ${color.common.white};`,
  Neutral: `background: ${color.common.neutral};`,
  Transparent: `background: ${color.common.transparent};`,
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  ${props => backgroundColors[props.background]};

  padding: ${({ mobilePaddingTop, mobilePaddingBottom }) =>
    getPadding(mobilePaddingTop, mobilePaddingBottom, 48)};

  ${atMinWidth.md`
    padding: ${({ tabletPaddingTop, tabletPaddingBottom }) =>
      getPadding(tabletPaddingTop, tabletPaddingBottom, 64)};
  `}

  ${atMinWidth.xl`
    padding: ${({ desktopPaddingTop, desktopPaddingBottom }) =>
      getPadding(desktopPaddingTop, desktopPaddingBottom, 72)};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
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
