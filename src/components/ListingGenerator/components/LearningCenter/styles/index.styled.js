import styled from 'styled-components';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 64px 0px;
  ${atMinWidth.xl`
    padding: 96px 0px;
  `}
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 96px;
  `}
`;
export const Sidebar = styled.aside`
  width: 100%;
  display: none;
  ${atMinWidth.xl`
    display: block;
  `}
`;
export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .pagination {
    justify-content: center;
    margin: 0px;
    ${atMinWidth.xl`
      justify-content: space-between;
    `}
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${atMinWidth.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;
