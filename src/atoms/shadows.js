import { css } from 'styled-components';

const shadowSizesLight = {
  xs: [
    {
      x: '0',
      y: '2',
      blur: '8',
      spread: '0',
      opacity: '0.1',
    },
  ],
  sm: [
    {
      x: '0',
      y: '2',
      blur: '16',
      spread: '0',
      opacity: '0.1',
    },
  ],
  md: [
    {
      x: '0',
      y: '2',
      blur: '32',
      spread: '0',
      opacity: '0.1',
    },
  ],
  lg: [
    {
      x: '0',
      y: '2',
      blur: '56',
      spread: '0',
      opacity: '0.1',
    },
  ],
  xl: [
    {
      x: '0',
      y: '8',
      blur: '56',
      spread: '0',
      opacity: '0.15',
    },
  ],
  xxl: [
    {
      x: '0',
      y: '20',
      blur: '56',
      spread: '0',
      opacity: '0.15',
    },
  ],
  xxx: [
    {
      x: '0',
      y: '32',
      blur: '64',
      spread: '-12',
      opacity: '0.25',
    },
  ],
  none: [
    {
      x: '0',
      y: '0',
      blur: '0',
      spread: '0',
      opacity: '0',
    },
  ],
  focusRing: [{ x: '0', y: '0', blur: '0', spread: '4', opacity: '0.2' }],
};

const shadowSizesDark = {
  xs: [
    {
      x: '0',
      y: '1',
      blur: '2',
      spread: '0',
      opacity: '0.05',
    },
  ],
  sm: [
    {
      x: '0',
      y: '1',
      blur: '3',
      spread: '0',
      opacity: '0.1',
    },
    {
      x: '0',
      y: '1',
      blur: '2',
      spread: '0',
      opacity: '0.06',
    },
  ],
  md: [
    {
      x: '0',
      y: '4',
      blur: '8',
      spread: '-2',
      opacity: '0.1',
    },
    {
      x: '0',
      y: '2',
      blur: '4',
      spread: '-2',
      opacity: '0.06',
    },
  ],
  lg: [
    {
      x: '0',
      y: '12',
      blur: '16',
      spread: '-4',
      opacity: '0.08',
    },
    {
      x: '0',
      y: '4',
      blur: '6',
      spread: '-2',
      opacity: '0.03',
    },
  ],
  xl: [
    {
      x: '0',
      y: '20',
      blur: '24',
      spread: '-4',
      opacity: '0.08',
    },
    {
      x: '0',
      y: '8',
      blur: '8',
      spread: '-4',
      opacity: '0.03',
    },
  ],
  xxl: [
    {
      x: '0',
      y: '24',
      blur: '48',
      spread: '-12',
      opacity: '0.18',
    },
  ],
  xxx: [
    {
      x: '0',
      y: '32',
      blur: '64',
      spread: '-12',
      opacity: '0.14',
    },
  ],
  none: [
    {
      x: '0',
      y: '0',
      blur: '0',
      spread: '0',
      opacity: '0',
    },
  ],
  focusRing: [{ x: '0', y: '0', blur: '0', spread: '4', opacity: '0.2' }],
};
const shadowSizesRed = {
  xs: [
    {
      x: '0',
      y: '2',
      blur: '8',
      spread: '0',
      opacity: '0.1',
    },
  ],
  sm: [
    {
      x: '0',
      y: '2',
      blur: '16',
      spread: '0',
      opacity: '0.1',
    },
  ],
  md: [
    {
      x: '0',
      y: '2',
      blur: '32',
      spread: '0',
      opacity: '0.1',
    },
  ],
  lg: [
    {
      x: '0',
      y: '2',
      blur: '56',
      spread: '0',
      opacity: '0.1',
    },
  ],
  xl: [
    {
      x: '0',
      y: '4',
      blur: '56',
      spread: '0',
      opacity: '0.15',
    },
  ],
  xxl: [
    {
      x: '0',
      y: '8',
      blur: '56',
      spread: '0',
      opacity: '0.15',
    },
  ],
  xxx: [
    {
      x: '0',
      y: '32',
      blur: '64',
      spread: '-12',
      opacity: '0.25',
    },
  ],
  none: [
    {
      x: '0',
      y: '0',
      blur: '0',
      spread: '0',
      opacity: '0',
    },
  ],
  focusRing: [{ x: '0', y: '0', blur: '0', spread: '4', opacity: '0.2' }],
};
const shadowColors = {
  dark: '#081A28',
  light: '#ffffff',
  red: '#FF3429',
};

const shadowSizes = {
  dark: shadowSizesDark,
  light: shadowSizesLight,
  red: shadowSizesRed,
};

const convertToRGB = hex => {
  hex = hex.replace('#', '');
  if (hex.length !== 6) hex = '133OCD';

  const splitHex = hex.match(/.{1,2}/g);
  const rgb = {
    r: parseInt(splitHex[0], 16),
    g: parseInt(splitHex[1], 16),
    b: parseInt(splitHex[2], 16),
  };

  return rgb;
};

/*
 * Usage: ${shadow('xs', 'red')}
 */
export const shadow = (size, color = 'dark') => {
  const { r, g, b } = convertToRGB(shadowColors[color] || color);

  const shadowsToMap = shadowSizes[color];

  const units = shadowsToMap[size].map(
    ({ x, y, blur, spread, opacity }, index) => {
      const unitString = `${x}px ${y}px ${blur}px ${spread}px`;
      const colorString = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      const deliminator = index + 1 === shadowsToMap[size].length ? ';' : ',';

      return `${unitString} ${colorString} ${deliminator}`;
    }
  );

  return css`
    box-shadow: ${units};
  `;
};
