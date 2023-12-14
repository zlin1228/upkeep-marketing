import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  border-bottom: 1px solid ${color.darkBlue[50]};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing[10]};
  ${font('display', 'tiny-xs', '700')}
  color: ${({ textColor }) => textColor};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
`;
