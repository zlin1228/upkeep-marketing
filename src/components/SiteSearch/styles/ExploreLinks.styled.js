import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[38]};
  padding: ${spacing[16]} ${spacing[0]};
  ${atMinWidth.md`
    padding: ${spacing[24]} ${spacing[0]};
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[40]};
  ${atMinWidth.md`
    flex-direction: row;
    gap: ${spacing[82]};
  `}
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  ${atMinWidth.md`
    width: 327px;
  `}
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[8]};
  ${font('display', 'tiny-sm', '700')}
  color: ${color.darkBlue[1000]};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  padding: ${spacing[0]} ${spacing[0]} ${spacing[0]} ${spacing[32]};
  margin: ${spacing[0]};
  list-style: none;
`;

export const ListItem = styled.li`
  a {
    font-weight: 600;
    justify-content: flex-start;
    svg {
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      svg {
        transform: translateX(4px);
      }
    }
  }
`;
