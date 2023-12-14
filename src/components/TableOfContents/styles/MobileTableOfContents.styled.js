import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid #cfd6e2;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  outline: none;
  margin: 32px auto;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 100%;
  height: 56px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${color.darkBlue[900]};
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
  &:hover,
  &:focus {
    outline: none;
    background: transparent;
    color: #0d141a;
  }
  svg {
    font-size: 18px;
    margin-left: 12px;
  }
  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
`;
export const List = styled.ul`
  width: 100%;
  max-height: 0px;
  opacity: 0;
  list-style: none;
  padding: 0px;
  margin: 0px;
  transition: all 400ms ease-in-out;
  &.active {
    max-height: 1000px;
    opacity: 1;
  }
`;
export const ListItem = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]} !important;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover,
  &:active,
  &:focus {
    background: ${color.primary[25]};
    color: ${color.primary[900]} !important;
  }
  a {
    width: 100%;
    height: 100%;
  }
`;
