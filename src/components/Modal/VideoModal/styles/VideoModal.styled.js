import styled from 'styled-components';
import { Link } from 'gatsby';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

import {
  sizes,
  variants,
  defaultStyles,
} from '../../../CallToAction/styles/CallToAction.styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  background: none;
  &.visible {
    animation: fade-modal-in 400ms ease-in forwards;
  }
  &.hidden {
    animation: fade-modal-out 400ms ease-in forwards;
  }
  @keyframes fade-modal-in {
    0% {
      opacity: 0;
      pointer-events: none;
    }
    100% {
      opacity: 1;
      pointer-events: all;
    }
  }
  @keyframes fade-modal-out {
    0% {
      opacity: 1;
      pointer-events: all;
    }
    100% {
      opacity: 0;
      pointer-events: none;
    }
  }
`;
export const Overlay = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  background: rgba(0, 0, 0, 0.9);
  border: none;
  outline: none;
  padding: 0px;
  &:hover,
  &:focus {
    outline: none;
    border: none;
    background: rgba(0, 0, 0, 0.9);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0px auto;
  padding: 0px 24px;
  z-index: 9999;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  &.visible {
    animation: modal-in 400ms ease-in-out forwards;
  }
  &.hidden {
    animation: modal-out 400ms ease-in-out forwards;
  }
  @keyframes modal-in {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes modal-out {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
`;
export const Exit = styled.button`
  width: 100%;
  height: auto;
  width: 14.97px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0px;
  font-size: 16px;
  margin-bottom: 24px;
  background: transparent;
  border: none;
  outline: none;
  opacity: 1;
  transition: opacity 400ms ease;
  &:hover {
    opacity: 0.5;
    background: none;
  }
  &:focus {
    outline: none;
  }
`;
export const Video = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 34px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
export const Details = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 24px;
`;
export const Logo = styled.div`
  width: fit-content;
  height: 100%;
  max-height: 33px;
  padding: 0px;
  margin-bottom: 16px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Heading = styled.div`
  ${font('display', 'sm', '700')}
  color: ${color.common.white};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    ${font('display', 'sm', '700')}
    color: ${color.common.white};
  }
`;
export const Subhead = styled.p`
  ${font('text', 'lg', '400')}
  color: ${color.mediumGrey[100]};
`;
export const CallToAction = styled(Link)`
  ${defaultStyles}
  ${sizes.xl}
  ${variants.Red}
`;
