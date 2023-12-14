import styled from 'styled-components';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  ${atMinWidth.lg`
    justify-content: space-between;
    min-width: calc(625px / 0.75);
  `}
  @media(min-width: 1700px) {
    min-width: calc(680px / 0.75);
  }
`;

export const Dots = styled.div`
  display: flex;
  gap: 24px;
`;
export const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #0d141a;
  opacity: ${props => (props.index === props.activeSlide ? 1 : 0.5)};
`;

export const Button = styled.button`
  display: none;
  position: relative;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  z-index: 999;
  border-radius: 9999px;
  transition: all 250ms ease-in-out;
  @media (min-width: 992px) {
    display: block;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    z-index: -1;
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus {
    background: none;
    outline: none;
    border: none;
    &::before {
      background: #33394b;
    }
    svg path {
      background: #33394b;
      fill: #fff;
      z-index: 100;
    }
  }
`;
