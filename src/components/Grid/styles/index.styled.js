import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';
import { backgroundImages } from '../../../atoms/backgroundImage';

export const backgroundMap = {
  Light: css`
    background-color: ${color.common.white};
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
  'Blue Linear': css`
    background: linear-gradient(180deg, #fff 48.72%, #f7faff 48.73%);
  `,
  'Midnight/25': css`
    background-color: ${color.midnight[25]};
  `,
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[80]};
  padding: ${spacing[48]} ${spacing[0]};
  ${({ backgroundColor }) => backgroundMap[backgroundColor]};

  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]};
  `}

  ${atMinWidth.xl`
    gap: ${spacing[112]};
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

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[80]};
  z-index: 3;
  ${atMinWidth.sm`
    gap: ${spacing[112]};
  `}
  ${atMinWidth.xl`
    gap: ${spacing[128]};
  `}
`;
