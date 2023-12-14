import styled from 'styled-components';
import { color } from '../../../../../atoms/colors';
import { font } from '../../../../../atoms/typography';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px;
  ${atMinWidth.sm`
    padding: 0px 24px;
  `}
  ${atMinWidth.xl`
    display: none;
  `}
  #defaultSearchBar {
    max-width: 100%;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .count {
    ${font('text', 'md', '400')};
    color: ${color.darkBlue[900]};
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  ${font('display', 'xs', '700')};
  color: ${color.darkBlue[900]};
  background-color: ${color.common.white};
  border: 1px solid ${color.mediumGrey[50]};
  outline: none;
  border-radius: 8px;
  transition: all 250ms ease-in-out;
  &:focus,
  &:hover {
    color: ${color.darkBlue[900]};
    background-color: ${color.common.white};
    border: 1px solid ${color.mediumGrey[50]};
    outline: none;
    opacity: 0.5;
  }
`;
