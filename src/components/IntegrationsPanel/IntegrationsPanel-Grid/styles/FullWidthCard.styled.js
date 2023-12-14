import styled from 'styled-components';

import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { spacing } from '../../../../atoms/spacing';
import { shadow } from '../../../../atoms/shadows';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  background-color: ${color.common.white};
  border: 1px solid ${color.darkBlue[50]};
  transition: box-shadow 250ms ease-in-out;
  &:hover {
    ${shadow('xl', 'dark')}
  }
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  `}
`;
export const Text = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[24]};
  padding: ${spacing[32]};
  .heading-kicker {
    ${font('overline', 'sm', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[1000]};
    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    ${atMinWidth.xl`
        max-width: 500px;
        height: auto;
    `}
  }
`;
