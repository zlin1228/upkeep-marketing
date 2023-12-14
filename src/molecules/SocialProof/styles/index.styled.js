import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  ${atMinWidth.xl`
    align-items: flex-start;
  `}
`;
export const Rating = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
  p {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[100]};
  }
`;
export const Logos = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  ${atMinWidth.xs`
    gap: 15px;
  `}
  ${atMinWidth.xl`
    width: 100%;
    justify-content: flex-start;
    gap: 30px;
  `}
  img {
    width: fit-content;
    max-width: 120px;
    max-height: 14px;
    object-fit: contain;
    ${atMinWidth.xs`
      max-width: 138px;
      max-height: 20px;
    `}
    ${atMinWidth.xl`
      max-height: 23px;
    `}
  }
`;
