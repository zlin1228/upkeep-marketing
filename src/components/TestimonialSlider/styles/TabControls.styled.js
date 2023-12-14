import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';

export const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0px auto 0px auto;
  ${atMinWidth.sm`
    justify-content: flex-end;
  `}
  ${atMinWidth.md`
      max-width: 768px;
  `}
  @media(min-width: 1240px) {
    max-width: 1344px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  width: max-content;
  margin: 0px 17px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${atMinWidth.sm`
    width: max-content;
    margin: 0px 32px;
  `}
`;

export const Button = styled.div`
  border-radius: 14px;
  padding: 4px 12px;
  height: max-content;
  min-width: max-content;
  ${font('text', 'xs', '700')}
  background: ${color.darkBlue[50]};
  color: ${color.darkBlue[500]};
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${color.darkBlue[100]};
    color: ${color.darkBlue[700]};
  }

  &:focus,
  &.selected {
    outline: none;
    border: none;
    background: ${color.steel[700]};
    color: ${color.common.white};
  }
`;
