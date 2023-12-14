import styled from 'styled-components';
import { color } from '../../../atoms/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  ${({ reverse }) =>
    reverse ? 'flex-direction: row-reverse;' : 'flex-direction: row;'}
  @media (max-width: 499px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;
export const Controls = styled.div`
  display: flex;
  .button-wrapper {
    display: flex;
    ${({ reverse }) =>
      reverse ? 'flex-direction: row-reverse;' : 'flex-direction: row;'}
  }
`;
export const Button = styled.button`
  position: relative;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px 8px 0px 0px;
  z-index: 999;
  border-radius: 50%;
  transition: all 250ms ease-in-out;
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    transition: all 250ms ease-in-out;
  }
  &:focus {
    outline: none;
    background: none;
  }
  &:hover {
    background: none;
    outline: none;
    border: none;
    border-radius: 50%;
    &::before {
      background: #33394b;
    }
    svg path {
      background: #33394b;
      fill: #fff;
      z-index: 100;
    }
    svg rect {
      stroke: #33394b;
    }
  }
`;
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  ${({ reverse }) =>
    reverse ? 'flex-direction: row-reverse;' : 'flex-direction: row;'}
  @media (max-width: 992px) {
    margin-bottom: 24px;
  }
`;
export const PaginationLine = styled.button`
  width: 35px;
  height: auto;
  background: none;
  outline: none;
  border: none;
  padding: 16px 0px;
  margin: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  &:hover {
    background: none;
  }
  &:focus {
    outline: none;
  }
  &::after {
    display: block;
    position: relative;
    content: '';
    width: 100%;
    height: 2px;
    background: ${({ active }) =>
      active ? `${color.primary[500]}` : `${color.mediumGrey[400]}`};
  }
  @media (max-width: 1240px) {
    width: 20px;
  }
  @media (max-width: 500px) {
    width: 10px;
  }
`;
export const Numbers = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: ${color.mediumGrey[400]};
  margin: 0px 0px 0px 8px;
`;
