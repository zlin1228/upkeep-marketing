import styled, { css } from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto 40px auto;
  ${atMinWidth.md`
    display: none;
   `};
`;

export const NavItem = styled.button`
  min-width: max-content;
  background: none;
  border: none;
  color: #000;
  margin: 0px 12px;
  padding: 0px;
  ${font('text', 'md', '700')};
  color: ${color.darkBlue[900]};
  &:hover {
    background: none;
    color: ${color.primary[700]};
  }
  &:focus {
    outline: none;
  }
  ${props =>
    props.activeSlide === props.idx &&
    css`
      background: none;
      color: ${color.primary[700]};
    `}
`;
