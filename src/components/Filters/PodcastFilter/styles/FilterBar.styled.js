import styled from 'styled-components';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 42.5px;
  gap: 24px;
  ${atMinWidth.xl`
    flex-direction: row;
    margin-bottom: 56px;
    justify-content: space-between;
  `}
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  p {
    width: max-content;
    ${font('text', 'md', '400')};
    padding-bottom: 16px;
    ${atMinWidth.xl`
      ${font('text', 'lg', '400')};
    `}
    span {
      color: ${color.common.black};
      font-weight: 700;
    }
  }
  ${atMinWidth.xl`
     flex-direction: column;
     align-items: flex-start;
  `}
`;

export const Right = styled.div`
  margin-top: auto;
  #defaultSearchBar {
    width: 100%;
    max-width: unset;
    ${atMinWidth.xl`
       min-width: 370px;
       max-width: 370px;
     `}
  }
`;

export const DesktopFilter = styled.div`
  display: none;
  ${atMinWidth.xl`
    display: flex;
  `}
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
  ${atMinWidth.xl`
    display: none;
  `}
`;
