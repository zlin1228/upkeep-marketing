import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  transform: translateZ(0);
`;

export const Thumbnail = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  background: ${color.common.transparent};
  border: none;
  outline: none;
  padding: 0px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &.visible {
    opacity: 1;
    pointer-events: all;
    z-index: 100;
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }
  &:hover,
  &:focus {
    background: ${color.common.transparent};
    border: none;
    outline: none;

    .play-icon {
      opacity: 0.75;
    }
  }
  && .gatsby-image,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
    img {
      object-fit: contain !important;
    }
  }
`;

export const PlayIcon = styled.div`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow('xxl', 'dark')}
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: opacity 250ms ease-in-out;

  ${atMinWidth.sm`
    width: 64px;
    height: 64px;
  `}

  ${atMinWidth.md`
    width: 88px;
    height: 88px;
  `}
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  position: absolute;
  inset: 0px;
  border: none;
  outline: none;
  transition: all 250ms ease-in-out;
  &.visible {
    opacity: 1;
    pointer-events: all;
    z-index: 100;
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }
`;
