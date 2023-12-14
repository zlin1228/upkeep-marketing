import styled from 'styled-components';
import { motion } from 'framer-motion';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Nav = styled(motion.nav)`
  width: auto;
  height: 100%;
  display: none;
  align-items: center;
  gap: ${spacing[32]};
  padding: ${spacing[0]};
  margin: ${spacing[0]};

  ${atMinWidth.xl`
    display: flex;
  `}
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${spacing[0]};
  margin: ${spacing[0]};
  list-style: none;
`;

export const ListItem = styled.li`
  width: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    .chevron-down-icon {
      transform: rotate(180deg);
    }
  }

  .nav-link {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: ${spacing[8]};
    padding: ${spacing[10]} ${spacing[34]} ${spacing[10]} ${spacing[18]};
    background-color: ${color.common.transparent};
    border: none;
    border-radius: ${spacing[12]};
    outline: none;
    transition: all 250ms ease-in-out;
    ${font('display', 'tiny-sm', '700')}
    color: ${({ theme }) => theme};

    &:hover {
      background-color: ${color.common.transparent};
      border: none;
      outline: none;
      color: ${({ theme }) => theme};
    }

    &:focus-visible {
      outline: 4px solid ${color.steel[700]};
      outline-offset: -4px;
    }
  }

  .nav-link-cta {
    &:hover {
      background-color: ${color.common.transparent};
      border: none;
      outline: none;
      color: ${color.steel[700]};
    }
  }
`;
