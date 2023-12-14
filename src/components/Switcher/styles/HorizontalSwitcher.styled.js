import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: auto;
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
  max-width: 506px;
  margin: 0 auto;
  padding: 0px 30px;
  ${atMinWidth.md`
    max-width: 770px;
  `}
  ${atMinWidth.xl`
     max-width: 1240px;
  `}
`;

export const Header = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  margin: 0px auto 40px;
  padding: 0px 30px;
`;

export const HeadingKicker = styled.p`
  ${font('overline', 'lg', '700')};
  color: ${color.primary[700]};
`;

export const Heading = styled.h2`
  ${font('display', 'sm', '700')};
  color: ${color.darkBlue[900]};
  ${atMinWidth.lg`
    ${font('display', 'md', '700')};
  `}
  ${atMinWidth.xl`
    ${font('display', 'lg', '700')};
  `}
`;

export const Subhead = styled.p`
  ${font('text', 'md', '400')};
  text-align: center;
  color: ${color.darkBlue[600]};
  margin-bottom: 24px;
  ${atMinWidth.xl`
     ${font('text', 'lg', '400')};
  `}
`;
