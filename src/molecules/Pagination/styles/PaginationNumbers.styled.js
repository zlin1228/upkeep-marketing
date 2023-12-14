import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;
export const Count = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  ${font('text', 'lg', '400')}
  color: ${({ theme }) =>
    theme === 'dark' ? color.darkBlue[900] : color.common.white};

  b {
    ${font('text', 'lg', '700')}
  }

  ${atMinWidth.md`
    display: none;
  `}
`;

export const List = styled.ul`
  display: none;
  width: fit-content;
  align-items: center;
  gap: 12px;
  list-style: none;
  margin: 0px;
  padding: 0px;

  ${atMinWidth.md`
    display: flex;
  `}

  .elipsis {
    ${font('text', 'lg', '700')}
    padding-left: 8px;
    color: ${({ theme }) =>
      theme === 'dark' ? color.darkBlue[900] : color.common.white};
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${font('text', 'lg', '700')}
  color: ${({ theme }) =>
    theme === 'dark' ? color.darkBlue[900] : color.common.white};
  background-color: ${color.common.transparent};
  border: none;
  border-radius: 8px;
  opacity: 1;
  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    width: 40px;
    height: 42px;
    outline: 3px solid ${color.steel[700]};
    outline-offset: 3px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? color.darkGrey[50] : color.common.transparent};
  }

  &.active:focus {
    background-color: ${({ theme }) =>
      theme === 'dark' ? color.darkBlue[900] : color.steel[300]};
  }

  &.active {
    width: 40px;
    height: 42px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? color.darkBlue[900] : color.steel[300]};
    color: ${color.common.white};
  }
`;
