import styled from 'styled-components';
import { Link } from 'gatsby';

const textMappings = {
  'Light Blue': 'color: #33394b;',
  Dark: 'color: #fafafa;',
  White: 'color: #33394b;',
};
export const iconColors = {
  Purple: `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    background: rgb(73, 69, 251);
    `,
  Blue: `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    background: rgb(0, 123, 255);
    `,
  Yellow: `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    background: rgb(245, 201, 83);
    `,
  Green: `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    background: rgb(108, 199, 142);
    `,
  Pink: `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    background: rgb(246, 149, 206);
    `,
  Teal: `
    .fa-primary, .fa-secondary {
      fill: #ffffff;
    }
    background: rgb(114, 202, 216);
    `,
};

export const Clickable = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
`;
export const CardIcon = styled.div`
  display: flex;
  width: 41px;
  height: 40px;
  min-height: 40px;
  background-color: #e6f2ff;
  border-radius: 9999px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-bottom: 16px;
  ${props =>
    iconColors[props.iconColor] ||
    '.fa-primary { fill: #007bff; } .fa-secondary { fill: #007bff; }'}
  ${props =>
    props?.theme === 'Dark' &&
    '.fa-primary { fill: #ffffff; } .fa-secondary { fill: #ffffff; }'}
    img {
    width: 100%;
    filter: brightness(0);
    padding: 0 8px;
  }
`;
export const CardDetails = styled.div`
  width: 100%;
  height: auto;
  min-height: 135px;
  text-align: left;
  margin-bottom: 16px;
  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 21.6px;
    line-height: 32px;
    ${props => textMappings[props?.theme]}
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  p {
    width: 100%;
    height: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    ${props => textMappings[props?.theme]}
    margin-bottom: 16px;
  }
`;
export const CardCallToAction = styled(Link)`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  &:hover {
    color: #007bff;
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
    border-top: 2px solid #007bff;
    border-right: 2px solid #007bff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #007bff;
  }
`;
