import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  padding: 24px 32px 0px;
  margin: 0px;
  .dropdown {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${font('display', 'xs', '700')}
    text-align: left;
    color: ${color.darkBlue[900]};
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
    padding: 16px 0px;
    margin: 0px;
    &:hover,
    &:focus {
      color: ${color.darkBlue[900]};
      background-color: ${color.common.transparent};
      border: none;
      outline: none;
    }
  }
`;
export const List = styled.ul`
  width: 100%;
  max-height: 0px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  overflow-y: scroll;
  transition: all 250ms ease-in-out;
  &.active {
    max-height: 400px;
  }
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
  .filter-button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    ${font('text', 'md', '400')}
    text-align: left;
    color: ${color.darkBlue[600]};
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
    padding: 8px 24px;
    margin: 0px;
  }
`;
