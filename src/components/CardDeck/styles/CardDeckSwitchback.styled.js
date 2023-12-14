import styled from 'styled-components';

import { atMinWidth } from '../../../atoms/breakpoints';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { containers } from '../../../atoms/containers';
import { spacing } from '../../../atoms/spacing';

export const Section = styled.section`
  width: 100%;
  padding: ${spacing[40]} 0rem;
  background-color: ${color.darkBlue[1000]};
  ${atMinWidth.sm`
    padding: ${spacing[56]} 0rem;
  `}
  ${atMinWidth.xl`
    padding: ${spacing[64]} 0rem;
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: ${containers.md};
  display: flex;
  flex-direction: column-reverse;
  gap: ${spacing[32]};
  padding: 0px ${spacing[16]};
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px ${spacing[32]};
  `}
  ${atMinWidth.lg`
    gap: ${spacing[48]};
  `}
  ${atMinWidth.xl`
    max-width: ${containers.xl};
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: ${spacing[32]};
  `}
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[32]};
  padding-top: 0px;
  padding-bottom: 0px;
  ${atMinWidth.md`
    padding-top: ${({ paddingTop }) => paddingTop || '0px'};
    padding-bottom: ${({ paddingBottom }) => paddingBottom || '0px'};
  `}
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[24]};
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.steel[200]};
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.common.white};
    ${atMinWidth.lg`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    &,
    & p {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[100]};
    }
  }
  .cta {
    width: 100%;
    ${atMinWidth.md`
      width: fit-content;
    `}
  }
`;
