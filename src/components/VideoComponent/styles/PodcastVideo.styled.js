import styled from 'styled-components';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  jusitfy-content: center;
  border-radius: 16px;
  overflow: hidden;
  .hide_thumbnail,
  .hide_button {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: -1;
  }
  .active_thumbnail,
  .active_button {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    z-index: 1;
  }
  .hidden_iframe {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }
  .active_iframe {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    pointer-events: all;
    z-index: 1;
  }
  .featured_video {
    height: 100%;
    width: 100%;
    cursor: pointer !important;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  .gatsby-image {
    width: 100%;
    height: 100%;
  }
`;
export const PlayButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s;
  background: ${color.common.white};
  filter: drop-shadow(0px 24px 48px rgba(16, 24, 40, 0.18));

  svg {
    transform: translateX(2.5px);
  }
`;
