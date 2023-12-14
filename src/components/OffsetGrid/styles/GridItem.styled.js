import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
export const Heading = styled.p`
  ${font('display', 'xs', '700')}
  color: ${color.mediumGrey[900]};
`;
export const Subhead = styled.div`
  &,
  & p {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background: ${color.primary[700]};
  border-radius: 8px;
`;
