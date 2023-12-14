import styled from 'styled-components';
import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
  .pagination {
    margin: 0px;
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${atMinWidth.xl`
    gap: 40px;
  `}
  &::before {
    content: '';
    display: block;
    width: calc(100% - 45px);
    position: relative;
    height: 1px;
    margin: 0px auto;
    background-color: ${color.darkGrey[100]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    padding: 0px 23.5px;
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  padding: 0px 23.5px;
  ${atMinWidth.md`
    grid-template-columns: repeat(2, 1fr);
  `}
`;
