import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

const headingMappings = {
  Light: 'color: #00254c;',
  Dark: 'color: #FAFAFA;;',
  Neutral: 'color: #00254c;',
};
const descriptionMappings = {
  Light: 'color: #515667;',
  Dark: 'color: #FAFAFA;;',
  Neutral: 'color: #515667;',
};
export const Slide = styled(motion.div)`
  width: 100%;
  display: block;
  flex-direction: column;
  z-index: 100;
`;
export const SlideImage = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 0px;
  svg {
    max-height: 300px;
  }
  img {
    object-fit: cover;
  }
  @media (max-width: 499px) {
    max-height: 200px;
    svg {
      max-height: 200px;
    }
  }
`;
export const SlideHeading = styled.h5`
  width: 100%;
  height: auto;
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[900]};
  ${props => headingMappings[props?.theme]}
  text-transform: unset;
  margin-bottom: 12px;
`;
export const SlideDescription = styled.div`
  width: 100%;
  height: auto;
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  ${props => descriptionMappings[props?.theme]}
  margin-bottom: 24px;
`;
