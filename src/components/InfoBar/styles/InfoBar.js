import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${font('text', 'sm', '400')}
  color: ${color.mediumGrey[900]};
  ${atMinWidth.md`
    flex-direction: row;
    flex-wrap: wrap;
  `}
  .read_time,
  .author,
  .publish_date {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .read_time,
  .author,
  .publish_date {
    svg {
      color: #37c06b;
      margin-right: 8px;
    }
  }
`;
