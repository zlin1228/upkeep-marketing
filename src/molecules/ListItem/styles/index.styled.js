import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

const headingMap = {
  Light: `color: ${color.darkBlue[900]};`,
  Dark: `color: ${color.common.white};`,
  Neutral: `color: ${color.darkBlue[900]};`,
  Red: `color: ${color.darkBlue[900]};`,
  'Blue Linear': `color: ${color.darkBlue[900]};`,
};

const subheadMap = {
  Light: `color: ${color.darkBlue[600]};`,
  Dark: `color: ${color.darkBlue[100]};`,
  Neutral: `color: ${color.darkBlue[600]};`,
  Red: `color: ${color.darkBlue[600]};`,
  'Blue Linear': `color: ${color.darkBlue[600]};`,
};

const iconContainerMap = {
  Light: `background-color: ${color.primary[700]};`,
  Dark: `background-color: ${color.common.white};`,
  Neutral: `background-color: ${color.primary[700]};`,
  Red: `background-color: ${color.primary[700]};`,
  'Blue Linear': `background-color: ${color.primary[700]};`,
};

export const iconMap = {
  Light: color.common.white,
  Dark: color.primary[700],
  Neutral: color.common.white,
  Red: color.common.white,
  'Blue Linear': color.common.white,
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  && .heading {
    ${font('display', 'xs', '700')}
    ${({ theme }) => headingMap[theme]}
  }
`;
export const Svg = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => iconContainerMap[theme]}
  border-radius: 8px;
`;

export const Subhead = styled.div`
  ${font('text', 'lg', '400')}
  ${({ theme }) => subheadMap[theme]}
  margin-left: 42px;
`;
