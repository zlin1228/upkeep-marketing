import styled from 'styled-components';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';
import { font } from '../../../../../atoms/typography';

export const Section = styled.section`
  width: 100%;
  padding: 64px 0px 32px;
  background: ${color.mediumGrey[25]};
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  padding: 0px 23.5px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 100px;
  `}
`;
export const Sidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .count-text {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[900]};
    text-align: center;
    ${atMinWidth.xl`
      text-align: left;
    `}
  }
  .partnerships-filter-desktop {
    display: none;
    ${atMinWidth.xl`
        display: flex;
    `}
  }
  .partnerships-filter-mobile {
    display: block;
    ${atMinWidth.xl`
        display: none;
    `}
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
  ${atMinWidth.xl`
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  `}
`;
