import { motion } from 'framer-motion';
import styled from 'styled-components';

import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const ListItem = styled(motion.div)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'Light' ? color.common.white : color.steel[1000]};
  z-index: 3;
  border-radius: 20px;
  padding: 24px;
  overflow: hidden;
  a {
    width: max-content;
  }
`;

export const Heading = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: ${color.common.transparent};
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  ${font('display', 'xs', '700')}
  text-align: left;
  color: ${props =>
    props.theme === 'Light' ? color.darkBlue[1000] : color.common.white};
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    outline: none;
    border: none;
    color: ${props =>
      props.theme === 'Light' ? color.darkBlue[1000] : color.common.white};
  }
  ${atMinWidth.sm`
    ${font('display', 'md', '700')}
  `}
`;

export const iconBackgroundMap = {
  steel: color.steel[700],
  yellow: color.yellow[800],
  green: color.green[700],
  red: color.primary[700],
  midnight: color.midnight[600],
  blue: color.blue[700],
  darkBlue: color.darkBlue[1000],
  white: color.common.white,
};

export const IconContainer = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${props => iconBackgroundMap[props.backgroundColor]};
`;

export const Text = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  a {
    width: 100%;
    ${atMinWidth.sm`
      width: fit-content;
    `}
  }
`;

export const Subhead = styled(motion.div)`
  &,
  & p {
    ${font('text', 'lg', '400')}
    color: ${props =>
      props.theme === 'Light' ? color.darkBlue[600] : color.darkBlue[100]};
  }
  & p {
    margin-top: 24px;
  }
  ul,
  ol {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0px 0px 32px;
    list-style: none;
  }
  li {
    position: relative;
    text-align: left;
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: 50%;
      left: -32px;
      transform: translateY(-50%);
      background-color: ${color.steel[400]};
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -33px;
      top: 50%;
      transform: translateY(-50%);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 10px;
      background-repeat: no-repeat;
    }
  }
`;
