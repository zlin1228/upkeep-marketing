import styled from 'styled-components';
import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { shadow } from '../../../../../atoms/shadows';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${atMinWidth.xl`
      justify-content: flex-end;
  `}
`;
export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: ${color.common.white};
  border: 1px solid ${color.mediumGrey[50]};
  outline: none;
  border-radius: 8px;
  color: ${color.darkBlue[900]};
  ${font('display', 'xs', '700')}
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    background: ${color.common.white};
    border: 1px solid ${color.mediumGrey[50]};
    outline: none;
    color: ${color.darkBlue[900]};
    ${shadow('xs', 'dark')}
  }
  ${atMinWidth.xl`
      display: none;
  `}
`;
export const Paragraph = styled.p`
  ${font('text', 'md', '700')};
  color: ${color.mediumGrey[900]};
`;
