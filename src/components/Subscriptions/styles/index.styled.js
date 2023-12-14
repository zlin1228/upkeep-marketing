import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;
  h6 {
    ${font('overline', 'md', '700')}
    color: ${color.darkBlue[600]};
    margin-bottom: 16px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    justify-content: center;
  }
  a {
    margin-right: 40px;
  }
  a:last-child {
    margin-right: 0px;
  }
`;
