import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';
import {
  sizes,
  variants,
  defaultStyles,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  ${atMinWidth.xl`
    display: none;
  `}
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-in-out;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: fit-content;
  background-color: ${color.common.white};
  border-radius: 25px 25px 0px 0px;
  z-index: 9999;
  transform: translateY(100%);
  transition: transform 200ms ease-in-out;
  &.active {
    transform: translateY(0%);
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 16px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.darkBlue[900]};
  }
`;
export const Close = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  padding: 0px;
  margin: 0px;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
    opacity: 0.5;
  }
`;
export const Buttons = styled.div`
  width: calc(100% - 64px);
  display: flex;
  align-items: center;
  gap: 24px;
  border-top: 1px solid ${color.darkBlue[50]};
  margin: 0px auto;
  padding: 24px 0px;
  button {
    width: 100%;
    ${defaultStyles}
    ${sizes.xxl}
    &.reset {
      ${variants['Red-Outlined']}
    }
    &.done {
      ${variants.Red}
    }
  }
`;
