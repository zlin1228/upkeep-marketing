import styled from 'styled-components';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  ${atMinWidth.lg`
    display: none;
  `}
`;

export const Dot = styled.button`
  height: 8px;
  width: ${({ activeSlide, id }) => (activeSlide === id ? '80px' : '8px')};
  border-radius: ${({ activeSlide, id }) =>
    activeSlide === id ? '4px' : '50%'};
  background-color: ${color.steel[700]};
  background-color: ${({ activeSlide, id }) =>
    activeSlide === id ? color.steel[700] : color.steel[100]};
  border: none;
`;
