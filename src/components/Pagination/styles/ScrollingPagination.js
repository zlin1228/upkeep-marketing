import styled from 'styled-components';
import { Link } from 'gatsby';

const overlayStyles = {
  light: `
  background: radial-gradient(circle, 
    rgba(250,252,255,1) 0%, rgba(255,255,255,0) 0%, rgba(250,252,255,1) 80%);`,
  dark: `
  background: radial-gradient(circle, 
    rgba(23,38,54,1) 0%, rgba(255,255,255,0) 0%, rgba(23,38,54,1) 80%);`,
};

const positionBasedStyles = {
  toLeft: `
  left: 0;
  margin-right: 16px;
  border-radius: 0px 100px 100px 0px;
  `,
  toRight: `
  right: 0px;
  margin-left: 16px;
  border-radius: 100px 0px 0px 100px;
  `,
};

const scrollLinkColors = {
  light: `
  background:  #FAFCFF;
  color: #282F3C;
  &:hover {
    color: #282F3C;
  }
  `,
  dark: `
  background: #172536;
  color: #ffffff;
  &:hover {
    color: #ffffff;
  }
  `,
};

const iconColors = {
  light: `background: #ffffff;`,
  dark: `background: #172636;`,
};

export const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  ${props =>
    props.direction === 'toLeft'
      ? 'justify-content: flex-start;'
      : 'justify-content: flex-end;'}
  align-items: center;
  @media (max-width: 1175px) {
    display: none;
  }
  .scroll {
    position: absolute;
    margin: 0;
    animation: animate 15s linear infinite;
    @keyframes animate {
      0% {
        transform: translateX(20%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  ${props => overlayStyles[props.theme]}
  z-index: 100;
`;

export const ScrollLink = styled(Link)`
  position: absolute;
  ${props => positionBasedStyles[props.direction]}
  ${props => scrollLinkColors[props.theme]}
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  width: 125px;
  height: 56.39px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  &:hover {
    width: 200px;
    height: 100.39px;
    z-index: 9999;
  }
`;

export const IconWrapper = styled.div`
  border-radius: 9999px;
  z-index: 100;
  width: 24.39px;
  height: 24.39px;
  margin-left: 8px;
  border: 1.48813px solid #007bff;
  display: grid;
  place-items: center;
  ${props => iconColors[props.theme]}
  ${props =>
    props.direction === 'toRight' &&
    `right: 0;
    position: absolute;
    margin-right: 24px;`}
`;
