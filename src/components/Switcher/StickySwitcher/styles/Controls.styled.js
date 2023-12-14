import styled from 'styled-components';

import { spacing } from '../../../../atoms/spacing';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const controlColorMap = {
  'blue-700': color.blue[700],
  'green-500': color.green[500],
  'primary-500': color.primary[500],
  'steel-300': color.steel[300],
  'yellow-700': color.yellow[700],
  'yellow-900': color.yellow[900],
};

export const Container = styled.div`
  position: sticky;
  top: 68px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme === 'Dark' ? color.darkBlue[1000] : color.midnight[25]};
  z-index: 11;
  scroll-behavior: smooth;
  ${atMinWidth.xl`
    top: 80px;
  `}
  &.scrolled {
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: nowrap;
  gap: ${spacing[16]};
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-padding: ${spacing[16]};
  padding: ${spacing[24]} ${spacing[16]};
  margin-left: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  ${atMinWidth.sm`
    padding: ${spacing[40]} ${spacing[32]} ${spacing[32]};
    scroll-padding: ${spacing[32]};
  `}

  @media (min-width: 835px) {
    width: 100%;
    max-width: 1216px;
    overflow: auto;
    margin: ${spacing[0]} auto;
  }
`;

export const Button = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing[8]};
  padding: ${spacing[10]} ${spacing[16]};
  border-radius: ${spacing[6]};
  border: 1px solid ${color.darkBlue[100]};
  ${({ theme }) =>
    theme === 'Dark'
      ? `1px solid ${color.darkBlue[700]}`
      : `1px solid ${color.darkBlue[100]}`};

  background: ${({ theme }) =>
    theme === 'Dark' ? color.darkBlue[900] : color.common.white};
  ${font('text', 'sm', '400')}
  white-space: nowrap;
  color: ${({ theme }) =>
    theme === 'Dark' ? color.darkBlue[200] : color.darkBlue[600]};
  scroll-snap-align: start;
  transition-property: color, border, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;

  &.active {
    color: ${({ theme }) =>
      theme === 'Dark' ? color.common.white : color.darkBlue[1000]};
    border: 1.5px solid ${props => props.borderColor};
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  }

  &: {
    color: ${color.darkBlue[1000]};
    border: 1.5px solid ${props => props.borderColor};
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
      0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  }

  @media (min-width: 835px) {
    width: 100%;
    text-align: left;
    white-space: normal;
  }
`;
