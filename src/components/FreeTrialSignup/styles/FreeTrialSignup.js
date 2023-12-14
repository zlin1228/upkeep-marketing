import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  textColor,
  arrowBorderTop,
  arrowBorderBottom,
} from '../../../utils/colorMappings';

export const Wrapper = styled.div`
  transition: all 0.3s ease;
  margin: 1rem 0.2rem 0rem 0rem;
  display: block;
`;
export const NotReadyText = styled.p`
  ${props =>
    props?.theme === 'Light' || props?.theme === 'Red'
      ? textColor.Dark
      : textColor.Light};
  display: inline-block;
  margin-right: 0.5rem;
  font-weight: bold;
  text-transform: capitalize;
  position: relative;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.02rem;
  cursor: text;
`;
export const CallToAction = styled(Link)`
  position: relative;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  white-space: nowrap;
  ${props => (props?.theme === 'Light' ? textColor.Red : textColor.Light)};
  &:hover {
    ${props => (props?.theme === 'Light' ? textColor.Red : textColor.Light)};

    &:after {
      right: -24px;
    }
    &:before {
      animation-name: grow-right;
      animation-duration: 0.25s;
      animation-fill-mode: forwards;
      @keyframes grow-right {
        0% {
          opacity: 0;
          width: 0;
        }
        100% {
          opacity: 1;
          width: 12px;
        }
      }
    }
  }
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    margin: auto;
    right: -16px;
    transform: translateY(-50%) rotate(45deg);
    transform-origin: bottom;
    width: 6px;
    height: 6px;
    ${props =>
      props?.theme === 'Light' ? arrowBorderTop.Red : arrowBorderTop.Dark};
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    ${props =>
      props?.theme === 'Light'
        ? arrowBorderBottom.Red
        : arrowBorderBottom.Dark};
  }
`;
