import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

const cardBackgroundMap = {
  darkBlue: color.darkBlue[900],
  steel: color.steel[800],
  primary: color.primary[1000],
};
const categoryColorMap = {
  darkBlue: color.darkBlue[300],
  steel: color.steel[200],
  primary: color.primary[200],
};
export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  min-height: 400px;
  background-color: ${props => cardBackgroundMap[props?.theme]};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;
export const Button = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  z-index: 100;
  background-color: ${color.common.transparent};
  border: none;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${color.common.transparent};
    border: none;
    outline: none;
  }
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.common.white};
  }
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .heading {
    ${font('display', 'xs', '700')}
    color: ${color.common.white};
  }
  .category {
    ${font('overline', 'md', '600')}
    color: ${props => categoryColorMap[props?.theme]};
  }
`;
