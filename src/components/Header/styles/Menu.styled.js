import styled from 'styled-components';
import { motion } from 'framer-motion';

import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';

export const Dropdown = styled(motion.div)`
  position: fixed;
  top: ${props =>
    props.announcementBarHeight
      ? `calc(80px + ${props.announcementBarHeight}px)`
      : '80px'};
  margin: 0 auto;
  left: 0;
  right: 0;
  width: max-content;
  max-width: 1064px;
  padding-top: 16px;
  pointer-events: ${props => (props.menuActive ? 'auto' : 'none')};
  visibility: ${props => (props.menuActive ? 'visible' : 'hidden')};
  z-index: 100;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${containers.xl};
  height: 100%;
  padding: ${spacing[32]};
  margin: ${spacing[0]} auto;
  background: ${color.common.white};
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ id }) => (id === 2 ? 'row' : 'column')};
  gap: ${spacing[24]};
`;
