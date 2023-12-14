import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Menu = styled.div`
  width: 100%;
  background-color: ${color.grey[25]};
`;

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid ${color.darkBlue[50]};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${spacing[24]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.lg`
    padding: ${spacing[24]} ${spacing[32]};
  `}

  .menu-heading {
    ${font('text', 'sm', '700')}
    color: ${color.steel[700]};
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;

  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[16]} ${spacing[32]};
  `}
`;

export const ListItem = styled.li`
  width: 100%;
  height: inherit;
`;
