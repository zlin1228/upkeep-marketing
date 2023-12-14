import styled, { css } from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

import { variants, sizes } from '../../CallToAction/styles/CallToAction.styled';

const eyebrowMap = {
  Light: `color: ${color.steel[800]};`,
  Dark: `color: ${color.steel[200]};`,
  Neutral: `color: ${color.primary[700]};`,
  Red: `color: ${color.primary[700]};`,
  'Blue Linear': `color: ${color.primary[700]};`,
  'Light Blue': `color: ${color.primary[700]};`,
  'Midnight/25': `color: ${color.steel[800]};`,
};

const headingMap = {
  Light: `color: ${color.darkBlue[1000]};`,
  Dark: `color: ${color.common.white};`,
  Neutral: `color: ${color.darkBlue[900]};`,
  Red: `color: ${color.darkBlue[900]};`,
  'Blue Linear': `color: ${color.darkBlue[900]};`,
  'Light Blue': `color: ${color.darkBlue[900]};`,
  'Midnight/25': `color: ${color.darkBlue[1000]};`,
};

const primaryButtonMap = {
  Light: variants['Filled - Red'],
  Dark: variants['Filled - Red'],
  Neutral: variants['Filled - Red'],
  Red: variants['Filled - Red'],
  'Blue Linear': variants['Filled - Red'],
  'Light Blue': variants['Filled - Red'],
};

const secondaryButtonMap = {
  Light: variants['Outline Red - Dark'],
  Dark: variants['Outline - White'],
  Neutral: variants['Outline Red - Dark'],
  Red: variants['Outline Red - Dark'],
  'Blue Linear': variants['Outline Red - Dark'],
  'Light Blue': variants['Outline Red - Dark'],
};

export const primaryLinkMap = {
  Light: 'Link - Dark',
  Dark: 'Link - White',
  Neutral: 'Link - Red',
  Red: 'Link - Red',
  'Blue Linear': 'Link - Red',
  'Light Blue': 'Link - Red',
};

export const Container = styled.div`
  width: 100%;
  order: 1;
  ${({ reverse }) =>
    reverse &&
    css`
      ${atMinWidth.xl`
        order: 2;
      `}
    `}
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    ${({ theme }) => eyebrowMap[theme]}
  }
  .heading {
    ${font('display', 'sm', '700')}
    ${({ theme }) => headingMap[theme]}
    ${atMinWidth.sm`
        ${font('display', 'md', '700')}
    `}
    ${atMinWidth.xl`
        ${font('display', 'lg', '700')}
    `}
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  ${atMinWidth.md`
    width: fit-content;
    flex-direction: row;
  `}
  .primary-button, .secondary-button {
    width: 100%;
    ${sizes.xl}
    ${atMinWidth.md`
        width: fit-content;
        ${sizes.xxl}
    `}
  }
  .primary-button {
    ${({ theme }) => primaryButtonMap[theme]};
  }
  .secondary-button {
    ${({ theme }) => secondaryButtonMap[theme]};
  }
  .primary-link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${atMinWidth.md`
      width: fit-content;
    `}
    &:hover {
      svg {
        transform: translateX(3px);
      }
    }
  }
`;
