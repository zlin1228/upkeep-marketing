import { css } from 'styled-components';
import { color } from './colors';

const primaryFont = `'Gilroy'`;
const defaultLetterSpacing = '0';
const overlineLetterSpacing = '0.04';
const defaultFontWeight = '400';

const defaultFontStyle = {
  letterSpacing: defaultLetterSpacing,
};

const overlineDefault = {
  ...defaultFontStyle,
  letterSpacing: overlineLetterSpacing,
};

export const fontSize = {
  display: {
    xxl: { ...defaultFontStyle, fontSize: '4.5', lineHeight: '5.625' },
    xl: { ...defaultFontStyle, fontSize: '3.75', lineHeight: '4.5' },
    lg: { ...defaultFontStyle, fontSize: '3', lineHeight: '3.75' },
    md: { ...defaultFontStyle, fontSize: '2.25', lineHeight: '2.75' },
    sm: { ...defaultFontStyle, fontSize: '1.875', lineHeight: '2.375' },
    xs: { ...defaultFontStyle, fontSize: '1.5', lineHeight: '2' },
    tiny: { ...defaultFontStyle, fontSize: '1.25', lineHeight: '1.875' },
    'tiny-sm': { ...defaultFontStyle, fontSize: '1.125', lineHeight: '1.75' },
    'tiny-xs': { ...defaultFontStyle, fontSize: '1', lineHeight: '1.5' },
  },
  text: {
    xl: { ...defaultFontStyle, fontSize: '1.25', lineHeight: '1.875' },
    lg: { ...defaultFontStyle, fontSize: '1.125', lineHeight: '1.75' },
    md: { ...defaultFontStyle, fontSize: '1', lineHeight: '1.5' },
    sm: { ...defaultFontStyle, fontSize: '0.875', lineHeight: '1.25' },
    xs: { ...defaultFontStyle, fontSize: '0.75', lineHeight: '1.125' },
  },
  overline: {
    lg: { ...overlineDefault, fontSize: '1.25', lineHeight: '1.875' },
    md: { ...overlineDefault, fontSize: '1.125', lineHeight: '1.75' },
    sm: { ...overlineDefault, fontSize: '1', lineHeight: '1.5' },
  },
  richText: {
    h1: { ...defaultFontStyle, fontSize: '3.052', lineHeight: '4.578' },
    h2: { ...defaultFontStyle, fontSize: '2', lineHeight: '3' },
    h3: { ...defaultFontStyle, fontSize: '1.728', lineHeight: '2.592' },
    h4: { ...defaultFontStyle, fontSize: '1.44', lineHeight: '2.16' },
    h5: { ...defaultFontStyle, fontSize: '1.2', lineHeight: '1.8' },
    h6: { ...defaultFontStyle, fontSize: '1', lineHeight: '1.5' },
    body: { ...defaultFontStyle, fontSize: '1.125', lineHeight: '2.25' },
    caption: { ...defaultFontStyle, fontSize: '0.875', lineHeight: '1.35' },
    blockquote: { ...defaultFontStyle, fontSize: '1.875', lineHeight: '2.625' },
  },
};

/*
 *   ${font('display', 'xl', '700')}
 */
export const font = (
  style = 'text',
  size = 'md',
  weight = defaultFontWeight
) => {
  const fontSizeStyle = fontSize[style][size] || fontSize[style].md;
  const isOverline = style === 'overline';
  const letterSpacing = isOverline
    ? overlineLetterSpacing
    : defaultLetterSpacing;

  return css`
    font-size: ${fontSizeStyle.fontSize}rem;
    font-weight: ${weight};
    font-family: ${primaryFont}, sans-serif;
    line-height: ${fontSizeStyle.lineHeight}rem;
    letter-spacing: ${letterSpacing}rem;
    margin-bottom: 0;
    text-transform: ${isOverline ? 'uppercase' : 'none'};
  `;
};

export const richTextStyles = css`
  h1,
  h1 span {
    ${font('richText', 'h1', '700')}
  }

  h2,
  h2 span {
    ${font('richText', 'h2', '700')}
  }

  h3,
  h3 span {
    ${font('richText', 'h3', '700')}
  }

  h4,
  h4 span {
    ${font('richText', 'h4', '700')}
  }

  h5,
  h5 span {
    ${font('richText', 'h5', '700')}
  }

  h6,
  h6 span {
    ${font('richText', 'h6', '700')}
  }

  p,
  span,
  li {
    ${font('richText', 'body', '400')}
  }

  strong {
    font-weight: 700;
  }

  a {
    ${font('richText', 'body', '400')}
    color: ${color.steel[700]};
    transition: color 250ms ease-in-out;

    &:hover {
      color: ${color.steel[900]};
    }
  }

  small {
    ${font('richText', 'caption', '400')}
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0px;
    padding-left: 24px;
  }

  blockquote {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0px 16px 40px;
    margin: 24px 0px;
    border-left: 3px solid ${color.steel[700]};
    color: ${color.steel[700]};
    ${font('richText', 'blockquote', '400')}
  }

  blockquote p {
    color: ${color.steel[700]};
    ${font('richText', 'blockquote', '400')}
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;
