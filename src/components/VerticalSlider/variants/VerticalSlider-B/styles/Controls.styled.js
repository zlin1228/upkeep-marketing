import styled from 'styled-components';

import { spacing } from '../../../../../atoms/spacing';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

import {
  defaultStyles,
  sizes,
  variants,
} from '../../../../CallToAction/styles/theme.styled';

export const Container = styled.div`
  position: sticky;
  top: 64px;
  width: 100%;
  background-color: ${color.darkBlue[25]};
  padding-left: ${spacing[16]};
  border-bottom: ${({ scrolled }) =>
    scrolled && `1px solid ${color.darkBlue[100]}`};
  z-index: 2;
  overflow: hidden;

  ${atMinWidth.lg`
    top: 80px;
    padding-left: ${spacing[0]};
  `}
`;

export const Wrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: ${spacing[24]};
  margin: ${spacing[0]} auto;
  padding: ${spacing[16]};
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  ${atMinWidth.lg`
    width: fit-content;
    display: grid;
    grid-template-columns: ${({ numOfItems }) => `repeat(${numOfItems}, auto)`};
    padding: ${spacing[24]} ${spacing[0]};
  `}
`;

export const Button = styled.button`
  width: fit-content;
  ${defaultStyles}
  ${sizes.md}
  ${variants['Outline Dark - Transparent']}
  white-space: nowrap;
  scroll-snap-align: start;
`;

export const Spacer = styled.div`
  width: 100%;
  padding-right: 100vw;

  ${atMinWidth.lg`
    padding-right: 0vw;
  `}
`;
