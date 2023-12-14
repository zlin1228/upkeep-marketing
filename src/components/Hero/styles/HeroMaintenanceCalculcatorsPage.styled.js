import styled from 'styled-components';
import { font } from '../../../atoms/typography';

export const Wrapper = styled.div`
  padding: 192px 15px 50px;
  text-align: center;
  @media (max-width: 576px) {
    padding: 164px 15px 32px;
  }
`;
export const Heading = styled.h1`
  max-width: 770px;
  ${font('display', 'lg', '700')}
  margin: 0 auto 24px;
`;
export const Subhead = styled.div`
  max-width: 770px;
  ${font('text', 'xl', '400')}
  margin: 0 auto 24px;
`;
