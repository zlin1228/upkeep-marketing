import styled, { css } from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { shadow } from '../../../../atoms/shadows';
import { atMinWidth } from '../../../../atoms/breakpoints';

import {
  defaultStyles,
  variants,
  sizes,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(40, 47, 60, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: flex-end;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: all 400ms ease-in-out;
  ${props =>
    props?.mobileFilterActive &&
    css`
      opacity: 1;
      z-index: 9999;
      pointer-events: all;
    `}
  ${atMinWidth.xl`
    display: none;
  `}
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 46px;
  background: ${color.common.white};
  ${shadow('md', 'dark')}
  border-radius: 25px 25px 0px 0px;
  transform: translateY(100%);
  transition: all 250ms ease-in-out;
  ${props =>
    props?.mobileFilterActive &&
    css`
      transform: translateY(0%);
    `}
  ${atMinWidth.xl`
    display: none;
  `}
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 16px;
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  ${font('display', 'xs', '700')}
  color: ${color.darkBlue[900]};
`;
export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  color: ${color.darkBlue[900]};
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  &:focus,
  &:hover {
    color: ${color.darkBlue[900]};
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const Filters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0px 32px 24px;
`;
export const ResetBtn = styled.button`
  width: 100%;
  transition: all 300ms ease-in-out;
  ${defaultStyles}
  ${variants['Filled - Dark']}
  ${sizes.xxl}
`;
export const DoneBtn = styled.button`
  width: 100%;
  transition: all 300ms ease-in-out;
  ${defaultStyles}
  ${variants['Filled - Red']}
  ${sizes.xxl}
`;
