import { Link } from 'gatsby';
import styled from 'styled-components';

export const setOverflowScroll = e => {
  e.target.style.overflow = 'scroll';
};
export const setOverflowHidden = e => {
  e.target.style.overflow = 'hidden';
};
const tagColorMappings = {
  blue: 'color: #004A99;',
  purple: 'color: #3039B0;',
  green: 'color: #1C6036;',
  red: 'color: #661510;',
  yellow: 'color: #776328;',
};
const overlayMappings = {
  blue: `
  background: linear-gradient(
    270deg,
    #fafcff 13.19%,
    rgba(255, 255, 255, 0) 40.31%
  );
  `,
  light: `
  background: linear-gradient(
    270deg,
    #ffffff 13.19%,
    rgba(255, 255, 255, 0) 40.31%
  ),
  linear-gradient(-270deg, #ffffff 0.5%, rgba(255, 255, 255, 0) 20.31%);
  `,
};
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
  z-index: 101;
`;
export const GradientOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  ${props => overlayMappings[props.theme]}
  z-index: 20;
`;
export const Scroll = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;

  .tag:last-child {
    padding-right: 100px;
  }

  &.scroll {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    animation: animate 15s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
    @keyframes animate {
      0% {
        transform: translateX(400px);
      }
      100% {
        transform: translateX(-400px);
      }
    }
  }
`;
export const FeaturedTag = styled.h3`
  position: static;
  pointer-events: none;
  width: auto;
  height: 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 13.5px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${props => tagColorMappings[props.color]}
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px 0px 0px;
  opacity: 0.8;

  &:hover {
    ${props => tagColorMappings[props.color]}
    opacity: 1;
  }
`;
export const Tag = styled(Link)`
  position: static;
  width: auto;
  height: 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 13.5px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${props => tagColorMappings[props.color]}
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 24px;
  opacity: 0.8;

  &:hover {
    ${props => tagColorMappings[props.color]}
    opacity: 1;
  }
`;
