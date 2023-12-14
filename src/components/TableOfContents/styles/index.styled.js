import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid #eaeaec;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.025);
  border-radius: 8px;
  padding: 32px;
  border-top: 4px solid ${color.primary[700]};
`;
export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    border: 1px solid black;
    background: none;
    outline: none;
    border: none;
    padding: 0px;
    ${font('display', 'xs', '700')}
    color: ${color.mediumGrey[900]};
    opacity: 1;
    transition: all 300ms ease-in-out;
    &:hover {
      background: none;
      outline: none;
      border: none;
      padding: 0px;
      ${font('display', 'xs', '700')}
      color: ${color.mediumGrey[900]};
      opacity: 0.7;
    }
    &:focus {
      background: none;
      outline: none;
      border: none;
      padding: 0px;
      ${font('display', 'xs', '700')}
      color: ${color.mediumGrey[900]};
      opacity: 1;
    }
  }
`;
export const List = styled.ul`
  width: 100%;
  height: auto;
  padding: 0px;
  margin: 0px;
  list-style: none;
  max-height: 0px;
  margin-top: 0px;
  opacity: 0;
  pointer-events: none;
  transition: all 300ms ease-in-out;
  &.active {
    max-height: 1000px;
    opacity: 1;
    pointer-events: all;
    margin-top: 24px;
  }

  li {
    width: 100%;
    height: auto;
    padding: 8px;
    transition: all 300ms ease-in-out;
    &:hover {
      background: ${color.primary[25]};
      a {
        color: ${color.primary[900]} !important;
      }
    }
    a {
      display: block;
      width: 100%;
      height: auto;
      ${font('text', 'md', '400')}
      color: ${color.darkBlue[600]} !important;
    }
  }
`;
