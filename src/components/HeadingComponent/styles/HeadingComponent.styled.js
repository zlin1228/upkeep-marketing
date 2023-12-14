import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

const kickerColor = {
  light: color.steel[800],
  dark: color.steel[200],
};

const headingColor = {
  light: color.darkBlue[1000],
  dark: color.common.white,
};

const subheadColor = {
  light: color.darkBlue[600],
  dark: color.darkBlue[100],
};

export const Container = styled.div`
  width: 100%;
  max-width: 832px;
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  z-index: 2;
  ${atMinWidth.xl`
    ${({ alignment }) =>
      alignment === 'switchback' &&
      css`
        max-width: 1280px;
        padding: ${spacing[0]} ${spacing[32]};
      `}
  `}
  ${props => props.styles}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  ${atMinWidth.xl`
    ${({ alignment }) =>
      alignment === 'switchback' &&
      css`
        flex-direction: row;
        justify-content: space-between;
      `}
  `}
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  ${({ alignment }) =>
    alignment === 'center' &&
    css`
      text-align: center;
    `}
  ${atMinWidth.xl`
    ${({ alignment }) =>
      alignment === 'switchback' &&
      css`
        max-width: 592px;
      `}
  `}
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  ${({ alignment }) =>
    alignment === 'center' &&
    css`
      text-align: center;
    `}
  ${atMinWidth.xl`
    ${({ alignment }) =>
      alignment === 'switchback' &&
      css`
        max-width: 520px;
      `}
  `}
`;

export const Kicker = styled.p`
  ${font('overline', 'md', '700')}
  color: ${props => kickerColor[props.theme]};
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')}
  color: ${props => headingColor[props.theme]};
  ${atMinWidth.md`
    ${font('display', 'md', '700')}
  `}
  ${atMinWidth.xl`
    ${font('display', 'lg', '700')}
  `}
`;

export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'lg', '400')}
    color: ${props => subheadColor[props.theme]};
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  ${atMinWidth.md`
    flex-direction: row;
  `}
  ${({ alignment }) =>
    alignment === 'center' &&
    css`
      justify-content: center;
    `}
`;
