import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

const buttonMappings = {
  Light: `color: ${color.darkBlue[900]};`,
  Dark: `color: ${color.darkGrey[400]};`,
  Neutral: `color:  ${color.darkBlue[900]};`,
};
const numberMappings = {
  Light: `color: ${color.primary[700]};`,
  Dark: `color: ${color.darkGrey[400]};`,
  Neutral: `color:  ${color.primary[700]};`,
};

const borderMappings = {
  Light: `border-left: 1px solid ${color.primary[700]};`,
  Dark: `border-left: 1px solid ${color.darkGrey[400]};`,
  Neutral: `border-left:  1px solid ${color.primary[700]};`,
};

export const Controls = styled.div`
  width: 100%;
  height: auto;
  button {
    width: 100%;
    height: auto;
    background: none;
    outline: none;
    border: none;
    color: black;
    padding: 0px 0px 0px 17px;
    margin: 0px 0px 16px 0px;
    text-align: left;
    ${font('display', 'xs', '700')}
    color: ${color.darkGrey[600]};
    transition: all 250ms ease-in-out;
    &:hover,
    &.active,
    &:focus {
      outline: none;
      background: ${color.common.transparent};
      ${props => borderMappings[props?.theme]}
      ${props => buttonMappings[props?.theme]} 
      span {
        ${props => numberMappings[props?.theme]}
      }
    }
    span {
      margin-right: 20px;
    }
    p {
      display: inline-block;
      margin-bottom: 0px;
    }
  }
`;
