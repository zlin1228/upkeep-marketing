import styled, { css } from 'styled-components';

import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';

const backgroundMap = {
  Light: css`
    background-color: ${color.common.transparent};
  `,
  Dark: css`
    background-color: ${color.darkBlue[1000]};
  `,
  Neutral: css`
    background-color: ${color.common.neutral};
  `,
  Red: css`
    background-color: ${color.primary[25]};
  `,
  'Light Blue': css`
    background-color: ${color.common.lightBlue};
  `,
};

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[32]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  ${({ backgroundColor }) => backgroundMap[backgroundColor]};
  z-index: 3;

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
    gap: ${spacing[48]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: 520px 592px;
    ${({ reverse }) =>
      reverse &&
      css`
        grid-template-columns: 592px 520px;
      `}
    gap: ${spacing[56]};
    justify-content: space-between;
  `}

  ${({ layout, offset, reverse }) =>
    layout === 'full-width' &&
    css`
      padding: 0px 24px;
      ${atMinWidth.sm`
        padding: 0px 35px;
      `}
      ${atMinWidth.xl`
        max-width: calc(100% - ${offset}px);
        display: grid;
        grid-template-columns: 570px 1fr;
        justify-content: space-between;
        padding-left: 30px;
        gap: 30px;
        ${
          reverse &&
          css`
            max-width: calc(100% - ${offset}px);
            grid-template-columns: 1fr 570px;
            padding-right: 30px;
          `
        }
      `}
    `}
`;
