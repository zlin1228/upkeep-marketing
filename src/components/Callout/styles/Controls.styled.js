import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 54px auto;
  column-gap: 12px;
  ${atMinWidth.md`
      column-gap: 24px;
  `}
`;

export const Dot = styled.button`
  display: block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #ef6d6d;
  padding: 0px !important;
  border: none;
  &.active {
    background-color: ${color.common.black};
  }
  &:hover {
    background-color: ${color.primary[700]};
  }
`;

export const Button = styled.button`
  display: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  background: none;
  outline: none;
  border: 1px solid #33394b;
  padding: 0px;
  margin: 0px;
  z-index: 999;
  border-radius: 9999px;
  transition: all 250ms ease-in-out;
  @media (min-width: 768px) {
    display: block;
  }
  &:hover,
  &:focus {
    background: #33394b;
    outline: none;
    border: none;
    svg use {
      background: #33394b;
      fill: #fff;
      z-index: 100;
    }
  }
`;
