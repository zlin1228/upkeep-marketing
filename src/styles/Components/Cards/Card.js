import styled, { css } from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

const cardStyles = {
  background: {
    White: css`
      background: ${color.common.white};
    `,
    'Light Gray': css`
      background: ${color.common.neutral};
    `,
    Dark: css`
      background: linear-gradient(180deg, #00395e 0%, #001828 100%);
    `,
    Red: css`
      background: linear-gradient(90deg, #c20a00 -4.68%, #ff3429 99.83%);
    `,
    'Gray Outlined': css`
      background-color: ${color.common.transparent};
      border: 2px solid ${color.mediumGrey[50]};
    `,
    Transparent: css`
      background-color: ${color.common.transparent};
      border: none;
    `,
  },
  hoverBG: {
    White: css`
      background: ${color.common.white};
    `,
    'Light Gray': css`
      background: ${color.common.white};
    `,
    Dark: css`
      background: linear-gradient(180deg, #00395e 0%, #001828 100%);
      border: 1px solid ${color.steel[900]};
    `,
    Red: css`
      background: linear-gradient(90deg, #c20a00 -4.68%, #ff3429 99.83%);
    `,
    'Gray Outlined': css`
      background: ${color.common.white};
    `,
    Transparent: css`
      background-color: ${color.common.transparent};
      box-shadow: none;
    `,
  },
  border: {
    White: css`
      border: 2px solid #eceef6;
    `,
    'Light Gray': css`
      border: 2px solid #eceef6;
    `,
    Dark: css`
      border: 1px solid ${color.steel[900]};
      border-radius: 8px;
    `,
    Red: css`
      border: none;
    `,
  },
  heading: {
    White: color.darkBlue[900],
    'Light Gray': color.mediumGrey[900],
    Dark: color.common.white,
    Red: color.common.white,
    'Gray Outlined': color.mediumGrey[900],
    Transparent: color.mediumGrey[900],
  },
  headingHover: {
    'Light Gray': `color: ${color.blue[900]};`,
  },
  subhead: {
    White: css`
      color: ${color.darkBlue[600]};
    `,
    'Light Gray': css`
      color: ${color.mediumGrey[700]};
    `,
    Dark: css`
      color: ${color.darkBlue[100]};
    `,
    Red: css`
      color: ${color.common.white};
    `,
    'Gray Outlined': css`
      color: ${color.darkBlue[600]};
    `,
    Transparent: css`
      color: ${color.darkBlue[600]};
    `,
  },
  iconColor: {
    Green: css`
      background-color: ${color.green[600]};
    `,
    Blue: css`
      background-color: ${color.blue[900]};
    `,
    Black: css`
      background-color: ${color.common.black};
    `,
    Yellow: css`
      background-color: ${color.yellow[400]};
    `,
    Red: css`
      background-color: ${color.primary[700]};
    `,
    Purple: css`
      background-color: #443bef;
    `,
  },
};
export const Frame = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  ${props => cardStyles?.background[props?.theme]};
  ${props => cardHoverStyles(props?.theme, props?.hoverable)}
  ${props => cardStyles?.border[props?.theme]};
`;
const cardHoverStyles = (theme, hoverable) => css`
  &:hover {
    ${hoverable &&
    css`
      box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
      border-color: transparent;
    `}
    ${hoverable && theme
      ? cardStyles?.hoverBG[theme]
      : cardStyles?.background[theme]};
  }
`;
export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #e4e7ec;
  .gatsby-image {
    width: 100%;
    height: 100%;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  ${({ theme }) =>
    theme === 'Transparent' &&
    css`
      padding: 0px;
      margin: 0px;
    `}
`;
export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const CardIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  ${props =>
    props?.iconColor
      ? cardStyles?.iconColor[props?.iconColor]
      : 'background: #DE1824;'}
  svg {
    width: 14px;
    height: 14px;
    fill: ${color.common.white};

    path {
      color: ${color.common.white};
      fill: ${color.common.white};
      stroke: ${color.common.white};
    }
  }
  img {
    width: 100%;
    filter: brightness(0);
    padding: 0 8px;
  }
`;
export const HeadingKicker = styled.p`
  ${font('overline', 'md', '700')}
  color: ${color.primary[700]};
`;
export const Heading = styled.p`
  ${font('text', 'lg', '800')}
  ${({ icon, image }) =>
    icon || image
      ? css`
          ${font('display', 'xs', '700')}
          margin-bottom: 8px;
        `
      : null} 
  
  
  color: ${({ theme }) => cardStyles?.heading[theme]};
`;
export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'lg', '400')}
    ${props => cardStyles?.subhead[props?.theme || 'White']}
  }
`;
export const linkMap = {
  White: 'Red-Arrow-Link',
  'Light Gray': 'Red-Arrow-Link',
  Dark: 'Arrow-Link-Light',
  Red: 'Red-Arrow-Link',
  'Gray Outlined': 'Red-Arrow-Link',
  Transparent: 'Red-Arrow-Link',
};
