import styled, { css } from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[50]};
  border-radius: 8px;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.common.transparent};
  color: ${color.darkBlue[900]};
  border: none;
  outline: none;
  ${font('display', 'xs', '700')}
  text-align: left;
  padding: 16px 24px;
  margin: 0px;
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    color: ${color.darkBlue[900]};
    border: none;
    outline: none;
  }
  ${props =>
    props?.expanded &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;
export const List = styled.ul`
  width: 100%;
  max-height: 0px;
  padding: 0px 24px;
  margin: 0px;
  list-style: none;
  transition: all 450ms ease-in-out;
  ${props => props?.expanded && `max-height: 800px; padding-bottom: 16px;`}
`;
export const ListItem = styled.li`
  width: 100%;
`;
export const Filter = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: ${color.common.transparent};
  color: ${color.darkBlue[600]};
  border: none;
  outline: none;
  padding: 8px 0px;
  ${font('text', 'md', '400')}
  text-align: left;
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    color: ${color.darkBlue[900]};
    border: none;
    outline: none;
  }
`;
export const Checkbox = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${color.darkBlue[400]};
  border-radius: 3px;
  transform: translateY(3.5px);
  svg {
    width: 10px;
    height: 10px;
  }
  &.active {
    background-color: ${color.darkBlue[400]};
  }
`;
