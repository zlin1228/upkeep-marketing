import styled from 'styled-components';
import { font } from '../../../../../atoms/typography';
import { color } from '../../../../../atoms/colors';
import { atMinWidth } from '../../../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 32px 0px 96px;
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
    grid-template-columns: 370px 1fr;
  `}
`;
export const Sidebar = styled.aside`
  width: 100%;
`;
export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Header = styled.div`
  width: 100%;
  .heading {
    ${font('display', 'xs', '500')}
    color: ${color.darkBlue[900]};
    span {
      ${font('display', 'xs', '700')}
    }
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
