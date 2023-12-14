import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';
import { shadow } from '../../../atoms/shadows';

export const Section = styled.section`
  width: 100%;
  background: ${color.common.white};
  padding: 48px 0px;
  ${atMinWidth.md`
    padding: 64px 0px;
  `}
  ${atMinWidth.xl`
    padding: 96px 0px;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 770px;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 23.5px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.lg`
    gap: 40px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0px auto;
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')}
  color: ${color.darkBlue[900]};
  text-align: center;
  ${atMinWidth.lg`
    ${font('display', 'md', '700')}
  `}
  ${atMinWidth.xl`
    ${font('display', 'lg', '700')}
  `}
`;

export const Subhead = styled.div`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  text-align: center;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 2fr);
  column-gap: 16px;
  .hopscotch-card:nth-child(1) {
    transform: translateY(8px);
  }
  .hopscotch-card:nth-child(2) {
    margin-top: 24px;
  }
  .hopscotch-card:nth-child(4) {
    margin-top: 16px;
  }
  ${atMinWidth.md`
    display: grid;
    max-width: 770px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: unset;
    gap: 12px;
    justify-content: center;
  `}
  ${atMinWidth.lg`
    display: grid;
    max-width: 1170px;
    gap: 16px;
    justify-content: center;
  `}
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  ${shadow('xl', 'dark')}
  border-radius: 8px;
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: auto;
  }
`;
