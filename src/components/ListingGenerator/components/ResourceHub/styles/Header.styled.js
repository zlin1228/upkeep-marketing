import styled from 'styled-components';

import { color } from '../../../../../atoms/colors';
import { shadow } from '../../../../../atoms/shadows';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.header`
  position: sticky;
  top: 72px;
  width: 100%;
  background-color: ${color.common.white};
  z-index: 1000;
  transition: box-shadow 250ms ease-in-out;
  &[data-scrolled='true'] {
    ${shadow('lg', 'dark')}
  }
  ${atMinWidth.lg`
    top: 80px;
  `}
`;
export const Nav = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0px 35px;
  margin: 0px auto;
  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;
export const List = styled.div`
  width: 100%;
  padding: 24px 0px;
  border-top: 1px solid #eceef6;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  list-style: none;
  padding: 24px 0px;
  margin: 0px auto;
  border-top: 1px solid #eceef6;
  @media (max-width: 992px) {
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  li {
    min-width: max-content;
    height: auto;
    text-align: center;
    scroll-snap-align: start;
  }
  a {
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #0d141a !important;
    padding: 6px 16px;
    border-radius: 4px;
    border: 3px solid transparent;
    margin: 0px 4px;
    transition: all 300ms ease-in-out;
    &.active,
    &:hover {
      border: 3px solid #007bff;
    }
    .count {
      font-weight: 600;
      color: ${color.darkBlue[600]};
    }
  }
`;
