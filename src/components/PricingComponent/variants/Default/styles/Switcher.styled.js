import styled from 'styled-components';
import { motion } from 'framer-motion';

import { font } from '../../../../../atoms/typography';
import { spacing } from '../../../../../atoms/spacing';
import { color } from '../../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  margin: ${spacing[0]} auto;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled(motion.ul)`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${spacing[16]};
  padding: ${spacing[0]};
  margin: ${spacing[0]} auto;
  list-style: none;
`;

export const Button = styled(motion.button)`
  position: relative;
  width: fit-content;
  height: 100%;
  padding: ${spacing[8]} ${spacing[16]};
  background-color: ${color.common.transparent};
  border: none;
  border-radius: 60px;
  outline: none;
  ${font('text', 'sm', '500')}
  color: ${color.darkBlue[600]};

  &.active {
    ${font('text', 'sm', '700')}
    color: ${color.darkBlue[1000]};
  }

  &:hover {
    background-color: ${color.common.transparent};
    outline: none;
    color: ${color.darkBlue[1000]};
  }

  &:focus-visible {
    border: none;
    background-color: ${color.common.transparent};
    outline: 3px solid ${color.steel[100]};
    color: ${color.darkBlue[1000]};
  }

  .overlay {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border: 3px solid ${color.steel[400]};
    border-radius: 60px;
    z-index: 1;
  }

  .text {
    position: relative;
    display: block;
    white-space: nowrap;
    z-index: 2;
  }
`;
