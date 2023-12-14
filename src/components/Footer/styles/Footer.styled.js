import styled from 'styled-components';

import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.footer`
  width: 100%;
  background: ${color.darkBlue[1000]};
  overflow: hidden;
  padding: ${spacing[48]} ${spacing[0]} ${spacing[32]};
  ${atMinWidth.sm`
    padding: ${spacing[72]} ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.lg`
    padding: ${spacing[96]} ${spacing[0]} ${spacing[32]};
  `}
`;
export const Wrapper = styled.nav`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[0]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    max-width: ${containers.md};
    flex-direction: row;
    justify-content: flex-start;
    gap: ${spacing[32]};
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;
export const MenuHeader = styled.div`
  display: none;
  ${atMinWidth.xl`
    max-width: ${containers.md};
    display: flex;
    flex-direction: column;
    gap: ${spacing[32]};
  `}
`;
export const Logo = styled.img`
  width: 200px;
`;
export const Header = styled.div`
  max-width: ${containers.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding: ${spacing[0]} ${spacing[16]};
  margin: ${spacing[0]} auto;
  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}
  ${atMinWidth.xl`
    display: none;
  `}
`;
