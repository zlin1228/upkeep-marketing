import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

const backgroundMappings = {
  Light: `background: ${color.common.white};`,
  Dark: `background: #121212;`,
  Neutral: `background: ${color.common.neutral};`,
};
const headingMappings = {
  Light: `color: ${color.darkBlue[900]};`,
  Dark: `color: ${color.mediumGrey[25]};`,
  Neutral: `color: ${color.darkBlue[900]};`,
};
const dividerMappings = {
  Light: `border: 1px solid #eaeaec;`,
  Dark: `border: 1px solid #a9acb1;`,
  Neutral: `border: 1px solid #eaeaec;`,
};
export const Section = styled.section`
  width: 100%;
  height: auto;
  ${props => backgroundMappings[props?.theme]};
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
  max-width: 1240px;
  padding: 0px 35px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  `}
`;
export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 17px;
`;
export const HeadingKicker = styled.p`
  ${font('overline', 'lg', '600')};
  color: ${color.primary[700]};
`;
export const Heading = styled.h3`
  ${font('display', 'md', '700')};
  ${props => headingMappings[props?.theme]};
`;
export const Subhead = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #515667;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #515667;
    margin-bottom: 0px;
  }
`;
export const Divider = styled.hr`
  box-sizing: border-box;
  width: 1px;
  height: 24px;
  margin: 0px 0px 16px 0px;
  ${props => dividerMappings[props?.theme]};
`;
