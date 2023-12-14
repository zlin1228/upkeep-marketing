import styled from 'styled-components';
import { Link } from 'gatsby';

import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';
import { containers } from '../../../atoms/containers';

import headerTheme from '../utils/headerTheme';

export const Header = styled.header`
  position: fixed;
  top: ${props =>
    props.announcementBarHeight ? `${props.announcementBarHeight}px` : '0px'};
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  z-index: 9000;

  ${atMinWidth.xl`
    height: 80px;
  `}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9001;

  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => headerTheme[theme].gradient};
    border-bottom: 1px solid ${color.common.transparent};
    ${({ scrolled, activeMenu, mobileNavActive, theme }) =>
      mobileNavActive ||
      scrolled ||
      theme !== 'Fill Transparent' ||
      activeMenu !== null ||
      (theme === 'Fill - Light' &&
        `border-bottom: 1px solid ${color.darkBlue[25]}`)};
    opacity: ${({ scrolled, activeMenu, mobileNavActive, theme }) =>
      mobileNavActive ||
      scrolled ||
      activeMenu !== null ||
      theme === 'Fill - Light'
        ? '1'
        : '0'};
    transition: ${({ theme }) =>
      theme !== 'Fill Transparent' && 'all 300ms ease-in-out'};

    z-index: -1;
  }

  &.exit {
    transition-delay: 0.5s;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[12]} ${spacing[16]};
  margin: ${spacing[0]} auto;

  ${atMinWidth.lg`
    padding: ${spacing[12]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
    padding: ${spacing[0]} ${spacing[32]};
  `}
`;

export const PrimaryContent = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing[40]};
`;

export const Logo = styled(Link)`
  width: 132px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${spacing[4]};
  transition: outline 250ms ease-in-out;

  &:focus-visible {
    outline: 4px solid ${color.steel[700]};
    outline-offset: 4px;
  }
`;

export const SecondaryContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[8]};

  ${atMinWidth.lg`
    gap: ${spacing[16]};
  `}
`;

export const SearchToggle = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.common.transparent};
  border: none;
  border-radius: ${spacing[8]};
  outline: none;
  padding: ${spacing[12]};
  transition: outline 250ms ease-in-out;

  svg use {
    transition: stroke 250ms ease-in-out;
  }

  &:hover {
    background-color: ${color.common.transparent};
    border: none;
    outline: none;

    svg use {
      stroke: ${color.steel[700]};
    }
  }

  &:focus-visible {
    outline: 4px solid ${color.steel[700]};
  }
`;

export const Buttons = styled.div`
  display: none;
  align-items: center;
  gap: ${spacing[12]};

  ${atMinWidth.lg`
    display: flex;
  `}

  a {
    white-space: nowrap;
  }
`;
