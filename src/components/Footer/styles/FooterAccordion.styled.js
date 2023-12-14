import { motion } from 'framer-motion';
import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${atMinWidth.sm`
    display: none;
  `}
  #contactInfo {
    margin-bottom: 64px;
  }
`;
export const List = styled.ul`
  width: 100%;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
  margin-bottom: 64px;

  & .footer-accordion-item:first-child {
    border-top: 1px solid ${color.darkBlue[800]};
  }
`;
