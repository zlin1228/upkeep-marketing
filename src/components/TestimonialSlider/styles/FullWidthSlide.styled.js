import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

const backgroundColorMap = {
  white: color.midnight[25],
  gray: color.common.neutral,
  'white-gray': color.common.white,
  'gray-white': color.common.white,
  'light-blue': color.darkBlue[1000],
  'DarkBlue/25': color.darkBlue[1000],
};

const headingColorMap = {
  white: color.darkBlue[1000],
  gray: color.darkBlue[1000],
  'white-gray': color.darkBlue[1000],
  'gray-white': color.darkBlue[1000],
  'light-blue': color.common.white,
  'DarkBlue/25': color.common.white,
};

const subheadColorMap = {
  white: color.darkBlue[600],
  gray: color.darkBlue[600],
  'white-gray': color.darkBlue[600],
  'gray-white': color.darkBlue[600],
  'light-blue': color.common.white,
  'DarkBlue/25': color.common.white,
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #eceef6;
  border-radius: 24px;
  background-color: ${props => backgroundColorMap[props.theme || 'white']};
  transform: translateZ(0);
  overflow: hidden;
  box-shadow: 0px 8px 8px -4px rgba(26, 19, 83, 0.03),
    0px 20px 24px -4px rgba(26, 19, 83, 0.08);

  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 384px 1fr;
  `}

  svg {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }
`;

export const Image = styled.div`
  width: 100%;
  .gatsby-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    ${atMinWidth.xl`
      aspect-ratio: 1/1;
    `}
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  ${atMinWidth.lg`
     padding: 40px;
  `}
`;

export const Quote = styled.div`
  &,
  & p {
    ${font('display', 'tiny-xs', '700')}
    color: ${props => headingColorMap[props.theme || 'white']};
    ${atMinWidth.lg`
        ${font('display', 'xs', '700')}
      `}
  }
`;

export const Author = styled.div`
  .name {
    ${font('text', 'lg', '800')}
    color: ${props => headingColorMap[props.theme || 'white']};
  }
  .company {
    ${font('text', 'lg', '400')}
    color: ${props => subheadColorMap[props.theme || 'white']};
    margin: 0px;
  }
`;
