import styled from 'styled-components';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
  ${atMinWidth.lg`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  margin: 0px auto;
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
  transition: all 300ms ease-in-out;
  &:hover,
  &:focus {
    background: transparent;
    outline: none;
    border: none;
    opacity: 0.8;
  }
  span {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: ${color.primary[700]};
    margin-bottom: 8px;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;
