import styled from 'styled-components';
import { motion } from 'framer-motion';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out;
  border-radius: 24px;
  background: ${color.common.white};
  height: 100%;
  min-height: 365px;
  overflow-x: hidden;
  overflow-y: hidden;
  ${shadow('sm', 'dark')}
  ${atMinWidth.sm`
    width: unset;
    height: 362px;
    aspect-ratio: 328/344;
  `}
  ${atMinWidth.lg`
    ${shadow('xl', 'dark')}
    aspect-ratio: ${props =>
      props.index === props.activeSlide ? '4/3' : '16/9'};
    height: ${props => (props.index === props.activeSlide ? '625px' : '370px')};
  `}
  @media(min-width: 1700px) {
    height: ${props => (props.index === props.activeSlide ? '680px' : '389px')};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background: gray;
  border-radius: ${props =>
    props.index === props.activeSlide || props.mobileActive
      ? '24px 24px 0px 0px'
      : '24px'};
  .gatsby-image-wrapper {
    border-radius: ${props =>
      props.index === props.activeSlide || props.mobileActive
        ? '24px 24px 0px 0px'
        : '24px'};
    width: 100%;
    aspect-ratio: ${props =>
      props.index === props.activeSlide || props.mobileActive
        ? '18/9'
        : '16/9'};
  }
`;

export const SlideDetails = styled(motion.div)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 24px;
  ${atMinWidth.lg`
    gap: 20px;
  `}
`;

export const Heading = styled.p`
  color: ${color.darkBlue[900]};
  ${font('display', 'sm', '700')}
  ${atMinWidth.lg`
    ${font('display', 'lg', '700')}
  `}
`;
