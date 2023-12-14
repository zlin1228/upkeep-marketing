import styled from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 48px 0px;
  background: ${color.common.white};
  ${atMinWidth.md`
    padding: 72px 0px;
  `} ${atMinWidth.xl`
    padding: 96px 0px;
  `};
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 566px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 30px;
  margin: 0px auto;
  ${atMinWidth.sm`
    gap: 48px;
   `}
  ${atMinWidth.lg`
    max-width: 630px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
  .static-wrapper {
    width: 100%;
    max-width: 992px;
    margin: 0px auto;
  }
`;
export const Header = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  margin: 0px auto;
  .heading-kicker {
    ${font('overline', 'md', '600')}
    color: ${color.primary[700]};
    ${atMinWidth.sm`
      ${font('overline', 'lg', '600')}
    `}
  }
  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.common.black};
    ${atMinWidth.sm`
      ${font('display', 'md', '700')}
    `}
    ${atMinWidth.lg`
      ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;
export const HeadingKicker = styled.p`
  ${font('overline', 'lg', '600')}
  color: ${color.primary[700]};
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  a {
    font-size: 18px;
  }
  ${atMinWidth.lg`
    gap: 48px;
  `}
  ${atMinWidth.xl`
    grid-template-rows: unset;
     grid-template-columns: repeat(2, 1fr);
      gap: 64px;
  `}
`;

export const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${color.mediumGrey[50]};
  ${atMinWidth.lg`
    grid-template-rows: unset;
     grid-template-columns: repeat(3, 1fr);
      padding-bottom: 48px;
  `}
  ${atMinWidth.xl`
    padding-right: 64px;
    padding-bottom: 0px;
    border-bottom: none;
    border-right: 1px solid ${color.mediumGrey[50]};
  `}
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    max-width: 100%;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  ${atMinWidth.xl`
    text-align: left;
     align-items: flex-start;
  `}
`;

export const Quote = styled.div`
  ${font('text', 'md', '400')}
  color: ${color.darkBlue[600]};
  text-align: center;
  ${atMinWidth.xl`
    text-align: left;
  `}
`;

export const Name = styled.p`
  ${font('text', 'md', '600')}
  color: ${color.common.black};
  span {
    ${font('text', 'sm', '400')}
    color: ${color.darkBlue[600]};
  }
`;
