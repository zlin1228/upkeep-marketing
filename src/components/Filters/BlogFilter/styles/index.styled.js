import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-height: 425px;
  border: 1px solid ${color.darkBlue[50]};
  border-radius: 8px;
  overflow: hidden;
`;
export const Header = styled.div`
  width: 100%;
  padding: 16px 25px;
  border-bottom: 1px solid ${color.darkBlue[50]};
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
  }
`;
export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0px 0px 80px;
  margin: 0px;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: red transparent;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${color.primary[700]};
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  &::after {
    content: '';
    position: absolute;
    top: 60px;
    right: 0px;
    width: 4px;
    height: 100%;
    background-color: ${color.darkBlue[50]};
    z-index: -1;
  }
  li {
    width: 100%;
  }
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    ${font('text', 'sm', '400')}
    text-align: left;
    color: ${color.darkBlue[600]};
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
    padding: 8px 16px;
    margin: 0px;
    transition: all 250ms ease-in-out;
    &:hover,
    &.active {
      ${font('text', 'sm', '400')}
      color: ${color.darkBlue[600]};
      background-color: ${color.darkBlue[25]};
      border: none;
      outline: none;
    }
    &:focus {
      color: ${color.darkBlue[600]};
      border: none;
      outline: none;
    }
  }
`;
