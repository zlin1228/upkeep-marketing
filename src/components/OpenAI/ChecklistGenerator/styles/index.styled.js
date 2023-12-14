import styled from 'styled-components';

import { color } from '../../../../atoms/colors';
import { spacing } from '../../../../atoms/spacing';
import { containers } from '../../../../atoms/containers';
import { shadow } from '../../../../atoms/shadows';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${containers.md};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  z-index: 10;

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[32]};
  background: ${color.common.white};
  ${shadow('xl', 'dark')}
  border-radius: ${spacing[16]};

  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 352px 1fr;
  `}
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[24]};
`;
