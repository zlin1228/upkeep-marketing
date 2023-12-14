import styled from 'styled-components';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0px 23.5px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${atMinWidth.xl`
    gap: 32px;
  `}
`;
export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: ${color.common.transparent};
  border: 1px solid ${color.darkGrey[500]};
  border-radius: 3px;
  outline: none;
  ${font('text', 'sm', '600')}
  color: ${color.darkGrey[700]};
  transition: all 250ms ease-in-out;
  &.active,
  &:hover,
  &:focus {
    background: ${color.darkBlue[900]};
    color: ${color.common.white};
    border: 1px solid ${color.darkBlue[900]};
    outline: none;
  }
`;
