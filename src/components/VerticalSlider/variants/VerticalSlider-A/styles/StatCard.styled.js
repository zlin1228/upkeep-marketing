import styled from 'styled-components';

import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';

export const Container = styled.div`
  widht: 100%;
  padding: 24px;
  background: ${color.common.white};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  .stat-heading {
    ${font('display', 'lg', '700')}
    color: ${color.primary[700]};
  }
  .stat-subhead {
    ${font('text', 'sm', '700')}
    color: ${color.common.black};
    p {
      ${font('text', 'sm', '700')}
      color: ${color.common.black};
    }
  }
`;
