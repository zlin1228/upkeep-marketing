import styled from 'styled-components';

import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { spacing } from '../../../atoms/spacing';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[16]};
  padding: ${({ theme }) =>
    theme === 'midnight' ? spacing[24] : `${spacing[0]}`};

  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: ${({ numOfItems }) => `repeat(${numOfItems}, 1fr)`};
  `}

  ${atMinWidth.xl`
     padding: ${({ addPadding }) =>
       addPadding ? `${spacing[0]} ${spacing[24]}` : spacing[0]};
  `}
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background: none;
  padding: ${spacing[16]};
  border-radius: 16px;
  ${font('text', 'lg', '700')}
  text-align: left;
  color: ${color.darkBlue[600]};

  .heading {
    display: block;
    ${font('text', 'sm', '700')}
    text-align: left;
    color: ${color.darkBlue[400]};

    ${atMinWidth.lg`
      text-align: center;
    `}
  }

  ${atMinWidth.lg`
    align-items: center;
    justify-content: center;
  `}

  &:hover,
  &:focus,
  &.active {
    background: ${color.darkBlue[25]};
    color: ${color.steel[700]};
    outline: none;
  }
`;
