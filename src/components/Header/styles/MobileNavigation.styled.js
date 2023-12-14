import styled from 'styled-components';
import { motion } from 'framer-motion';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled(motion.div)`
  position: fixed;
  top: ${props =>
    props.announcementBarHeight
      ? `calc(68px + ${props.announcementBarHeight}px)`
      : '68px'};
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  height: ${props =>
    props.announcementBarHeight
      ? `calc(100dvh + ${props.announcementBarHeight}px)`
      : 'calc(100dvh - 68px)'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${color.common.white};
  overflow: scroll;
  z-index: 9000;
`;

export const Navigation = styled.nav`
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${spacing[0]};
  padding: ${spacing[0]};
  list-style: none;
  .parent-item:last-of-type {
    border-bottom: 1px solid ${color.darkBlue[50]};
  }
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${color.darkBlue[25]};
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  background-color: ${color.common.transparent};
  outline: none;
  border: none;
  padding: ${spacing[0]};
  z-index: 9001;

  &:hover {
    background-color: ${color.common.transparent};
    outline: none;
    border: none;
    color: ${color.darkBlue[900]};
  }

  &:focus-visible {
    background-color: ${color.common.transparent};
    outline: 3px solid ${color.steel[700]};
    outline-offset: 1px;
    border: none;
    color: ${color.darkBlue[900]};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[12]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  ${font('text', 'md', '700')}
  color: ${color.darkBlue[900]};

  ${atMinWidth.lg`
    padding: ${spacing[24]} ${spacing[32]};
  `}
`;

export const Dropdown = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Buttons = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[12]};
  padding: ${spacing[24]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.lg`
    padding: ${spacing[24]} ${spacing[32]};
  `}
`;
