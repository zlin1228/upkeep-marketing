import styled from 'styled-components';

import { containers } from '../../../atoms/containers';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';

import {
  defaultStyles,
  sizes,
  variants,
} from '../../CallToAction/styles/theme.styled';
import { color } from '../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  max-width: ${containers.md};
  margin: ${spacing[0]} auto;
  padding: ${spacing[0]};

  ${atMinWidth.sm`
    padding: ${spacing[0]} ${spacing[32]};
  `}

  ${atMinWidth.xl`
    max-width: ${containers.xl};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  flex-wrap: nowrap;
  gap: ${spacing[16]};
  padding: ${spacing[0]} ${spacing[16]};
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-padding: ${spacing[32]};

  &::-webkit-scrollbar {
    display: none;
  }

  ${atMinWidth.sm`
    flex-wrap: wrap;
    overflow: hidden;
    padding: ${spacing[0]};
  `}

  ${atMinWidth.xl`
    max-width: 100%;
  `}
`;

export const Button = styled.button`
  ${defaultStyles}
  ${sizes.sm}
  ${variants['Outline Dark - Transparent']}
  scroll-snap-align: start;

  &:hover,
  &.active {
    color: ${color.common.white};
    background-color: ${color.darkBlue[1000]};
    border: 1px solid ${color.darkBlue[1000]};
  }
`;
