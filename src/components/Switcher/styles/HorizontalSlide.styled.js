import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Slide = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  ${atMinWidth.xl`
   flex-direction: row;
   gap: 30px;
   align-items: center;
  `}
`;

export const SlideText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-basis: 50%;
`;

export const SlideHeading = styled.h2`
  ${font('display', 'xs', '700')};
  color: ${color.darkBlue[900]};
  text-align: center;
  ${atMinWidth.lg`
     ${font('display', 'sm', '700')};
  `}
  ${atMinWidth.xl`
     text-align: left;
  `}
`;

export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'md', '400')};
    text-align: center;
    color: ${color.darkBlue[600]};
    margin-bottom: 24px;
    ${atMinWidth.xl`
     ${font('text', 'lg', '400')};
     text-align: left;
  `}
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  a {
    display: flex;
    justify-content: center;
  }
  .arrow {
    margin: 0 auto;
    ${atMinWidth.lg`
      margin: unset;
    `}
  }
  ${atMinWidth.lg`
   flex-direction: row;
   align-items: unset;

  `}
`;

export const SlideImg = styled.div`
  flex-basis: 50%;
  ${atMinWidth.lg`
  `}
`;
