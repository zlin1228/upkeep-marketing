import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

const headingColorMap = {
  Light: color.darkBlue[1000],
  Dark: color.common.white,
};

const subheadColorMap = {
  Light: color.darkBlue[600],
  Dark: color.darkBlue[100],
};

export const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${atMinWidth.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  `}
`;

export const Item = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .heading {
    &,
    & p {
      ${font('display', 'lg', '700')}
      color: ${({ theme }) => headingColorMap[theme]};
      span {
        color: ${color.steel[400]};
      }
    }
  }
  .subhead {
    &,
    & p {
      ${font('text', 'lg', '400')}
      color: ${({ theme }) => subheadColorMap[theme]};
    }
  }
`;
