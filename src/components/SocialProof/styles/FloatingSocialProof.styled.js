import styled, { css } from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';
import { backgroundImages } from '../../../atoms/backgroundImage';
import GridBackground from '../../../assets/background/grid-background.png';

const backgroundColorMap = {
  'Light/Dark': `linear-gradient(
    180deg,
    #ffffff 46.06%,
    rgba(255, 255, 255, 0) 46.08%
  );`,
  'Midnight/Dark': `linear-gradient(
    180deg,
    #f2f6fd 46.06%,
    rgba(255, 255, 255, 0) 46.08%
  );`,
  'Midnight25/Dark': `linear-gradient(180deg, #F7FAFF 46.06%, rgba(255, 255, 255, 0.00) 46.08%), #071621`,
};

const containerBackgroundColorMap = {
  light: css`
    border: 1px solid var(--steel-500, #009bce);
    background: linear-gradient(
        220deg,
        rgba(110, 160, 203, 0.3) 6.78%,
        rgba(216, 223, 228, 0) 102.94%
      ),
      #fff;
  `,
  dark: css`
    background: linear-gradient(180deg, #00395e 0%, #001828 100%);
    border: 1px solid ${color.steel[900]};
  `,
};

const eyebrowColorMap = {
  light: color.steel[700],
  dark: color.common.white,
};

const headingColorMap = {
  light: color.darkBlue[1000],
  dark: color.common.white,
};

const subheadColorMap = {
  light: color.darkBlue[600],
  dark: color.darkBlue[100],
};

const bgGridMap = {
  'Light/Dark': backgroundImages.grid.desktop,
  'Midnight/Dark': GridBackground,
  'Midnight25/Dark': GridBackground,
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[40]} 0rem 0rem;
  background: ${({ backgroundColor }) =>
    backgroundColorMap[backgroundColor] || backgroundColorMap['Midnight/Dark']};
  ${atMinWidth.sm`
    padding: ${spacing[56]} 0rem 0rem;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[64]} 0rem 0rem;
  `} 
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 54%;
    background-color: #071621;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 46%;
  position: absolute;
  inset: 0px;
  background-image: ${({ backgroundColor }) =>
    `url(${bgGridMap[backgroundColor]})`};
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  height: 100%;
  padding: 0px ${spacing[16]};
  z-index: 2;
  ${atMinWidth.sm`
    padding: 0px ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[56]};
  padding: ${spacing[40]} ${spacing[24]};
  border-radius: ${spacing[32]};
  ${({ theme }) =>
    containerBackgroundColorMap[theme] || containerBackgroundColorMap.dark}

  ${atMinWidth.sm`
    padding: ${spacing[48]} ${spacing[40]};
  `}
  ${atMinWidth.xl`
    padding: ${spacing[64]} ${spacing[40]};
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing[32]};
  margin: 0px auto;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[24]};
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${({ theme }) => eyebrowColorMap[theme] || eyebrowColorMap.dark};
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${({ theme }) => headingColorMap[theme] || headingColorMap.dark};

    ${atMinWidth.sm`
        ${font('display', 'md', '700')}
    `}

    ${atMinWidth.xl`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${({ theme }) => subheadColorMap[theme] || subheadColorMap.dark};
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  margin: 0px auto;

  a {
    width: 100%;
  }

  ${atMinWidth.sm`
    width: fit-content;
    flex-direction: row;
    align-items: center;

    a {
      width: fit-content;
    }
  `}
`;

export const Logos = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(${({ numOfItems }) => numOfItems}, 1fr);
  align-items: center;
  gap: ${spacing[14]};
  ${atMinWidth.sm`
    grid-template-columns: repeat(${({ numOfItems }) => numOfItems}, 1fr);
    gap: ${spacing[36]};
  `}
  ${atMinWidth.xl`
    grid-template-columns: repeat(${({ numOfItems }) => numOfItems}, 80px);
    gap: ${spacing[40]};
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .gatsby-image,
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Reviews = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[16]};

  .label {
    display: flex;
    align-items: center;
    gap: ${spacing[16]};

    .label-text {
      ${font('text', 'sm', '400')}
      color: ${({ theme }) => subheadColorMap[theme] || subheadColorMap.dark};
    }
  }

  .logos {
    width: fit-content;
    height: 22.5px;
    display: flex;
    aling-items: center;
    gap: ${spacing[32]};

    .gatsby-image,
    img {
      height: 20px;
    }
  }
`;
