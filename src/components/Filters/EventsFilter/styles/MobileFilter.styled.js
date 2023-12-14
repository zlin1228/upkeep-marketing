import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { font } from '../../../../atoms/typography';

export const FilterButton = styled.button`
  width: auto;
  padding: 16px 24px;
  background: ${color.common.white};
  ${font('display', 'xs', '700')}
  border: 1px solid ${color.mediumGrey[100]};
  border-radius: 8px;
  color: ${color.common.black};
  white-space: nowrap;
  &:focus,
  &:hover {
    outline: none;
    background: ${color.common.white};
    color: ${color.common.black};
  }
  img {
    margin-left: 8px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9999;
  pointer-events: none;
  &.active {
    pointer-events: all;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  transition: all 300ms ease-in-out;
  &.active {
    background: rgb(40, 47, 60, 0.5);
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${color.common.white};
  box-shadow: 0px 2px 32px rgba(0, 123, 255, 0.1);
  border-radius: 25px 25px 0px 0px;
  transform: translateY(100%);
  transition: all 300ms ease-in-out;
  &.active {
    transform: translateY(0px);
  }
`;
export const List = styled.ul`
  width: 100%;
  height: auto;
  padding: 0px 32px;
  list-style: none;
  margin: 0px;
  li {
    transition: all 300ms ease-in-out;
    &:first-child {
      border-top: 1px solid ${color.common.neutral};
      &.active {
        border-top: 1px solid transparent;
      }
    }
    &:last-child {
      border-top: 1px solid ${color.common.neutral};
      border-bottom: 1px solid ${color.common.neutral};
      &.active {
        border-bottom: 1px solid transparent;
      }
    }
  }
`;
export const ListsWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0px 0px 16px;
`;
export const Buttons = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 24px 32px 96px;
  display: flex;
  align-items: center;
  background: ${color.common.white};
  z-index: 9999;
`;
export const Button = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  &:focus {
    outline: none;
  }
  &.reset {
    border: 2px solid ${color.primary[700]};
    background: ${color.common.white};
    color: ${color.primary[700]};
    margin-right: 12px;
  }
  &.done {
    background: ${color.primary[700]};
    border: none;
    outline: none;
    color: ${color.common.white};
    margin-left: 12px;
  }
`;
