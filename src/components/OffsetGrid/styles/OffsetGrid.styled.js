import styled from 'styled-components';
import { atMinWidth } from '../../../atoms/breakpoints';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';

const backgroundColors = {
  white: color.common.white,
  'light-blue': color.common.lightBlue,
};
export const Section = styled.section`
  background: ${props =>
    backgroundColors[props?.background] || color.common.white};
  padding: 40px 0px;

  ${atMinWidth.lg`
    padding: 72px 0px;
  `}
  ${atMinWidth.xl`
    padding: 96px 0px;
  `};
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0px auto;
  padding: 0px 24px;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 1fr 672px;
    gap: 28px;
  `}
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  ${atMinWidth.xl`
    max-width: 470px;
    text-align: left;
  `}
`;
export const Kicker = styled.div`
  color: ${color.primary[700]};
  ${font('overline', 'lg', '700')}
`;
export const Heading = styled.h2`
  color: ${color.darkBlue[900]};
  ${font('display', 'sm', '700')}
  ${atMinWidth.lg`
     ${font('display', 'lg', '700')}
  `}
`;
export const Subhead = styled.div`
  color: ${color.darkBlue[600]};
  ${font('text', 'lg', '400')}
`;
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  ${atMinWidth.md`
     grid-template-columns: repeat(2, 1fr);
  `}
`;
