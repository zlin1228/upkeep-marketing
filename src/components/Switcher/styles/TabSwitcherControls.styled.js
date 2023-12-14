import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { spacing } from '../../../atoms/spacing';
import { atMinWidth } from '../../../atoms/breakpoints';
import { shadow } from '../../../atoms/shadows';
import { accentColorMap } from './TabSwitcher.styled';

export const Wrapper = styled.div`
  display: flex;
  gap: ${spacing[14]};
  overflow-x: scroll;
  padding: 0 ${spacing[32]} ${spacing[32]} ${spacing[32]};
  margin: 0 -32px -32px -32px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: min-content;
  position: relative;
  overflow: hidden;
  background: transparent;
  border: none;
  padding: ${spacing[16]};
  transition: all 300ms ease-in-out;
  ${font('text', 'md', '700')}
  border: ${({ activeIndex, index }) =>
    activeIndex === index
      ? `1px solid ${accentColorMap[index]}`
      : `1px solid ${color.darkBlue[100]}`};
  border-radius: 8px;
  color: ${({ activeIndex, index }) =>
    activeIndex === index ? color.darkBlue[1000] : color.darkBlue[600]};
  background: ${color.common.white};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: ${({ index }) => accentColorMap[index]};
  }
  &:hover {
    ${shadow('xl', 'dark')}
    ${({ index }) => `border: 1px solid ${accentColorMap[index]}`};
    color: ${color.darkBlue[1000]};
  }
  ${atMinWidth.xl`
    flex-basis: calc(25% - 14px);
    min-width: unset;
    flex-shrink: 1;
  `};
`;
