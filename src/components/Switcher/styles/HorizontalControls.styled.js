import styled, { css } from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Wrapper = styled.div`
  display: none;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${atMinWidth.md`
    display: flex;
    max-width: 530px;
    margin: 0 auto 56px;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  `}
  ${atMinWidth.xl`
    max-width: 1170px;
   `}
`;

export const NavItem = styled.button`
  min-width: max-content;
  background: none;
  border: none;
  color: #000;
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
