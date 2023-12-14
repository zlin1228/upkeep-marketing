import styled from 'styled-components';

import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: ${props => (props.noHeader ? '90px 0px 96px' : '90px 0px 96px')}
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f5f6f9 15.63%,
    #f9f5f6 33.98%,
    #edf7f4 49.94%,
    #eaeff6 70.07%,
    #ffffff 90.4%
  );
  ${atMinWidth.xl`
    gap: 0px;
  `}
`;
