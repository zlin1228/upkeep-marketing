import styled from 'styled-components';

import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${color.common.white};
  border-radius: 8px;
  padding: 16px;
`;
export const Quote = styled.div`
  &,
  & p {
    ${font('text', 'sm', '400')}
    color: ${color.common.black};
  }
`;
export const Source = styled.div`
  height: 24px;
  img {
    height: 100%;
    object-fit: contain;
  }
`;
