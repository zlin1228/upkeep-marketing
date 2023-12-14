import styled from 'styled-components';
import { spacing } from '../../../../atoms/spacing';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Wrapper = styled.div`
  position: relative;
  display: none;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 2px solid ${color.darkBlue[200]};
  ${atMinWidth.lg`
    display: grid;
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
  filter: ${({ activeSlide, id }) =>
    activeSlide === id ? 'contrast(100%)' : 'contrast(0%)'};
`;

export const Border = styled.div`
  position: absolute;
  bottom: -6px;
  left: 0;
  height: 4px;
  width: 0%;
  background-color: ${color.darkBlue[500]};
  transition: ${({ activeSlide, id }) =>
    activeSlide === id ? 'width 4.25s ease-in' : 'none'};
  width: ${({ activeSlide, id }) => (activeSlide === id ? '100%' : '0%')};
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  cursor: pointer;
  padding: ${spacing[32]};
`;
