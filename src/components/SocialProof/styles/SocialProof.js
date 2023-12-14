import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const backgroundMap = {
  Light: `background: ${color.common.white};`,
  Neutral: `background: ${color.common.neutral};`,
  DarkGrey: `background: ${color.darkGrey[50]}`,
};
export const Section = styled.section`
  width: 100%;
  padding: 48px 0px;
  ${props => backgroundMap[props.background]};
  ${atMinWidth.md`
    padding: 64px 0px;
  `}
  ${atMinWidth.xl`
    padding: 96px 0px;
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1040px;
  `}
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.xs`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    p {
      ${font('text', 'lg', '400')}
      color: ${color.darkBlue[600]};
    }
  }
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  ${atMinWidth.md`
    flex-direction: row;
  `}
  a {
    width: 100%;
    text-align: center;
    ${atMinWidth.md`
      width: fit-content;

    `}
  }
`;
