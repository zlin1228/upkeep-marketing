import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  background: ${color.common.white};
  outline: none;
  border: 1px solid ${color.mediumGrey[50]};
  border-radius: 8px;
  ${props =>
    props.expanded &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
  span {
    ${font('text', 'lg', '600')}
    color: ${color.common.black};
  }
  &:hover,
  &:focus {
    background: ${color.common.white};
    border: 1px solid ${color.mediumGrey[50]};
    outline: none;
    ${props =>
      props.expanded &&
      css`
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      `}
    span {
      ${font('text', 'lg', '600')}
      color: ${color.common.black};
    }
  }
`;
export const List = styled(motion.div)`
  width: 100%;
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[50]};
  border-radius: 8px;
  ${props =>
    props.expanded &&
    css`
      border-top: none;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    `}
`;
export const ListItem = styled.button`
  width: 100%;
  padding: 8px 24px;
  background: ${color.common.transparent};
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  span {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
  img {
    width: 15px;
    height: 15px;
    object-fit: contain;
  }
  &:hover,
  &:focus {
    background: ${color.common.transparent};
    outline: none;
    border: none;
    span {
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;
