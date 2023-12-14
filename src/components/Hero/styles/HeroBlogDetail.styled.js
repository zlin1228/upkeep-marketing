import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(
    83.82deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 130, 138, 0.15) 99.49%
  );
  padding: 89px 0px 64px;
  ${atMinWidth.xl`
    padding: 121px 0px 64px;
  `}
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px 24px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 1fr 570px;
    gap: 100px;
  `}
`;
export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .heading-kicker {
    ${font('overline', 'lg', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[900]};
    ${atMinWidth.md`
        ${font('display', 'lg', '700')}
    `}
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .gatsby-image,
  img {
    apsect-ratio: 16/9;
    border-radius: 8px;
    overflow: hidden;
    transform: translateZ(0);
  }
  ${atMinWidth.xl`
    .social-share {
      display: none;
    }
  `}
`;
