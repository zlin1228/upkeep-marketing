import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import gridBg from '../../../assets/background/grid-gray.svg';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';
import { backgroundImages } from '../../../atoms/backgroundImage';

const bgColors = {
  white: `background: ${color.common.white}`,
  gray: 'background: #f5f6f9',
  'white-gray':
    'background: linear-gradient(180deg, #FFFFFF 62.74%, #F5F6F9 62.74%)',
  'gray-white':
    'background: linear-gradient(180deg, #F5F6F9 62.74%, #FFFFFF 62.74%)',
  'DarkBlue/25': `background: ${color.darkBlue[25]}`,
  socialProof: {
    'white-gray':
      'background: linear-gradient(180deg, #FFFFFF 70%, #F5F6F9 62.74%)',
    'gray-white':
      'background: linear-gradient(180deg, #F5F6F9 70%, #FFFFFF 62.74%)',
  },
};

const bgGridMap = {
  white: backgroundImages.grid.desktop,
  'DarkBlue/25': gridBg,
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  ${props =>
    props.showSocialProof
      ? bgColors.socialProof[props?.bgColor]
      : bgColors[props?.bgColor]};
  padding: 64px 0px;
  overflow: hidden !important;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: ${({ bgColor }) => `url(${bgGridMap[bgColor]})`};
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
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]} ${spacing[16]};
  z-index: 2;

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    width: 100%;
    padding: 32px 17px;

    ${atMinWidth.sm`
      padding: 32px 32px;
    `}
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    max-width: 770px;
  }
  @media (max-width: 576px) {
    max-width: 506px;
  }
`;

export const SocialProofWrapper = styled.div`
  section {
    background: transparent;
    padding: 0px 0px 48px 0px;
    ${atMinWidth.md`
      padding: 0px 0px 64px 0px ;
    `}
  }
`;
