import styled from 'styled-components';

import { motion } from 'framer-motion';

import { color } from '../../../../atoms/colors';
import { containers } from '../../../../atoms/containers';
import { spacing } from '../../../../atoms/spacing';
import { font } from '../../../../atoms/typography';
import { atMinWidth } from '../../../../atoms/breakpoints';

import { backgroundImages } from '../../../../atoms/backgroundImage';

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 875px;
  background-color: ${props =>
    props.theme === 'Light' ? color.midnight[25] : color.darkBlue[1000]};
  padding: ${spacing[40]} ${spacing[0]};
  overflow: hidden;
  ${atMinWidth.xl`
    padding: ${spacing[64]} ${spacing[0]};
  `}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-image: ${props =>
    props.theme === 'Light' && `url(${backgroundImages.grid.desktop})`};
  /* background-image: url(${backgroundImages.grid.desktop}); */
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  pointer-events: none;
  z-index: 1; ;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0px auto;
  padding: 0px ${spacing[16]};
  ${atMinWidth.sm`
    padding: 0px ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: 592px 1fr;
    align-items: center;
    gap: 100px;
  `}
  @media(min-width: 1440px) {
    gap: 200px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
  ${atMinWidth.sm`
    gap: 48px;
  `}
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${props =>
      props.theme === 'Light' ? color.steel[800] : color.steel[200]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${props =>
      props.theme === 'Light' ? color.darkBlue[1000] : color.common.white};
    ${atMinWidth.sm`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${props =>
      props.theme === 'Light' ? color.darkBlue[600] : color.darkBlue[100]};
  }
`;

export const Image = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  .gatsby-image {
    width: 100%;
    height: 100%;
    ${atMinWidth.xl`
    width: 762px;
    height: auto;
  `}
  }
`;
