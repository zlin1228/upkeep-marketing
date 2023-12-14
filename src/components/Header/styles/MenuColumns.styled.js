import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

const gridMap = {
  0: 'grid-template-columns: repeat(4, minmax(auto, 188px));',
  1: 'grid-template-columns: repeat(3, minmax(auto, 238px));',
  2: 'grid-template-columns: repeat(2, 1fr);',
  3: 'grid-template-columns: unset;',
};

const borderMap = {
  0: `border-bottom: 2px solid ${color.darkBlue[25]};`,
  1: `border-bottom: 2px solid ${color.darkBlue[25]};`,
  2: `border-right: 2px solid ${color.darkBlue[25]};`,
  3: 'unset',
};

export const Column = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  ${({ id }) => borderMap[id]}
  ${({ id }) => (id <= 1 ? 'padding-bottom: 24px;' : 'padding-right: 24px;')}
  gap: 24px;
  &:last-of-type {
    border: none;
  }
`;

export const Group = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};

  .menu-heading {
    ${font('text', 'sm', '700')}
    color: ${color.steel[700]};
  }
`;

export const List = styled.ul`
  width: 100%;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
  display: ${({ isSingleItem }) => (isSingleItem ? 'flex' : 'grid')};
  flex-direction: ${({ isSingleItem }) => (isSingleItem ? 'row' : 'unset')};
  gap: ${spacing[8]};

  ${atMinWidth.lg`
    ${({ id }) => gridMap[id]}
    gap: ${spacing[16]};
  `}
`;

export const ListItem = styled.li`
  width: 100%;
  height: inherit;
`;
