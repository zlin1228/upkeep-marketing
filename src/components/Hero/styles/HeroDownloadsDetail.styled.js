import styled from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';
import { spacing } from '../../../atoms/spacing';

export const Section = styled.section`
  width: 100%;
  background: linear-gradient(
    83.82deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 130, 138, 0.15) 99.49%
  );
  padding: ${spacing[96]} ${spacing[0]} ${spacing[64]};
  ${atMinWidth.xl`
  padding: ${spacing[128]} ${spacing[0]} ${spacing[96]};
  `}
`;

export const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px 24px;
  margin: 0px auto;
  z-index: 10;
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
  flex-direction: column;
  gap: 40px;
  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: ${({ gatedContent }) =>
      gatedContent ? '1fr 470px' : '1fr 570px'};
    gap: 100px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .heading-kicker {
    ${font('overline', 'md', '700')}
    color: ${color.primary[700]};
  }
  .heading {
    ${font('display', 'md', '700')}
    color: ${color.darkBlue[1000]};
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
  border-radius: 8px;
  transform: translateZ(0);
  .gatsby-image,
  img {
    apsect-ratio: 16/9;
  }
  ${atMinWidth.xl`
    .social-share {
      display: none;
    }
  `}
`;
