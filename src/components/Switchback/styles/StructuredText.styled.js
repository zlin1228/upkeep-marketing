import styled, { css } from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

const dividerMap = {
  Light: color.darkBlue[50],
  Dark: color.darkBlue[700],
  Neutral: color.darkBlue[100],
  Red: color.darkBlue[100],
  'Blue Linear': color.darkBlue[100],
  'Midnight/25': color.darkBlue[50],
};

const listItemIconCircleMap = {
  Light: color.steel[400],
  Dark: color.steel[400],
  Neutral: color.primary[700],
  Red: color.primary[700],
  'Blue Linear': color.primary[700],
  'Midnight/25': color.steel[700],
};

const listItemIconCheckMap = {
  Light: `rgba(7, 22, 33, 1)`,
  Dark: `rgb(0, 0, 0)`,
  Neutral: `rgb(255, 255, 255)`,
  Red: `rgb(255, 255, 255)`,
  'Blue Linear': `rgb(255, 255, 255)`,
  'Midnight/25': `rgb(255, 255, 255)`,
};

const subheadMap = {
  Light: `color: ${color.darkBlue[600]};`,
  Dark: `color: ${color.darkBlue[100]};`,
  Neutral: `color: ${color.darkBlue[900]};`,
  Red: `color: ${color.darkBlue[900]};`,
  'Blue Linear': `color: ${color.darkBlue[900]};`,
  'Light Blue': `color: ${color.darkBlue[900]};`,
  'Midnight/25': `color: ${color.darkBlue[600]};`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${font('text', 'lg', '400')}
  ${({ theme }) => subheadMap[theme]}
  strong {
    display: contents;
    ${font('text', 'lg', '700')}
  }
  p {
    margin-bottom: 0px;
  }
  a {
    color: ${color.steel[400]};
    ${font('text', 'lg', '700')}
    &:hover {
      color: ${color.steel[700]};
    }
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    li {
      display: flex;
      flex-direction: column;
      margin: 0px 0px 16px 0;
      padding: 0px;
      ul > li {
        font-size: 0.8rem;
        position: relative;
        list-style: circle;
      }
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  & > ul > li {
    padding-left: 36px;
    position: relative;
    line-height: 24px;
    svg {
      stroke: ${color.common.white};
    }
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 0;
      top: 2px;
      background-color: ${({ theme }) => listItemIconCircleMap[theme]};
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -1.5px;
      top: 2.2px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='${props =>
        listItemIconCheckMap[
          props?.theme
        ]}' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 10px;
      background-repeat: no-repeat;
    }
    ul {
      padding: 0;
    }
  }
`;

export const Asset = styled.span`
  &.list-item {
    padding-bottom: 32px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => dividerMap[theme]};
    ${({ count, numOfItems }) =>
      count === numOfItems &&
      css`
        margin-bottom: 0px;
        padding-bottom: 0px;
        border: none;
      `};
    )}
  }
`;
