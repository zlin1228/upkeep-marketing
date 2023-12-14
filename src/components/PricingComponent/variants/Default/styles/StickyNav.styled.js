import styled from 'styled-components';

import { spacing } from '../../../../../atoms/spacing';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Header = styled.header`
  position: sticky;
  top: 68px;
  width: 100%;
  border-radius: ${spacing[0]};
  z-index: 100;

  ${atMinWidth.md`
    border-radius: ${spacing[0]} ${spacing[0]} ${spacing[16]} ${spacing[16]};
    margin: ${spacing[0]};
  `}

  ${atMinWidth.lg`
    padding: ${spacing[0]};
  `}

  ${atMinWidth.xl`
    top: 80px;
  `}
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: ${spacing[0]};
  margin: ${spacing[0]} auto;
`;
