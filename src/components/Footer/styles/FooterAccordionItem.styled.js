import { motion } from 'framer-motion';
import styled from 'styled-components';

import { spacing } from '../../../atoms/spacing';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spacing[8]} ${spacing[0]};
  border-bottom: 1px solid ${color.darkBlue[800]};
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${font('display', 'tiny-sm', '700')}
  color: ${color.common.white};
  background-color: ${color.common.transparent};
  outline: none;
  border: none;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  &:hover,
  &:focus {
    color: ${color.common.white};
    background-color: ${color.common.transparent};
    outline: none;
    border: none;
  }
  svg {
    transition: transform 0.3s ease-in-out;
  }
  &[data-expanded='true'] {
    svg {
      transform: rotate(45deg);
    }
  }
`;
export const List = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
  overflow: hidden;
  li:first-child {
    padding-top: 16px;
  }
  li:last-child {
    padding-bottom: 16px;
  }
`;
export const ListItem = styled.li`
  width: 100%;
  .accordion-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[100]};
    border-radius: 0px;
    text-align: left;
    &:hover {
      color: ${color.darkBlue[500]};
    }
  }
`;
