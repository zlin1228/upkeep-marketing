import styled, { css } from 'styled-components';

import { font } from '../../../../../atoms/typography';
import { containers } from '../../../../../atoms/containers';
import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';
import { color } from '../../../../../atoms/colors';

import { backgroundImages } from '../../../../../atoms/backgroundImage';
import {
  defaultStyles,
  sizes,
  variants,
} from '../../../../CallToAction/styles/theme.styled';

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spacing[80]} ${spacing[0]};
  background-color: ${color.midnight[25]};

  ${atMinWidth.md`
    padding: ${spacing[40]} ${spacing[0]};
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
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};
  z-index: 1;
  transition: padding 250ms ease-in-out;

  &.scrolled {
    padding: ${spacing[0]} ${spacing[0]};
  }

  ${atMinWidth.md`
    max-width: ${containers.md};
    gap: ${spacing[48]};
    padding: ${spacing[0]} ${spacing[32]};

    &.scrolled {
      padding: ${spacing[0]} ${spacing[32]};
    }
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    gap: ${spacing[32]};
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 389px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: ${spacing[80]};
  z-index: 2;
  background: linear-gradient(
    0deg,
    rgb(242, 246, 252) 40.79%,
    rgba(242, 246, 252, 0) 119.14%
  );

  ${({ tableExpanded }) =>
    tableExpanded &&
    css`
      position: relative;
      bottom: 0px;
      height: auto;
      align-items: center;
      padding-top: ${spacing[36]};
      padding-bottom: ${spacing[0]};
      background: ${color.common.transparent};
    `}
`;

export const Button = styled.button`
  width: auto;
  ${defaultStyles}
  ${variants['Link - Steel']}
  background-color: transparent;
  outline: none;
  border: none;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
