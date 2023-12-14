import styled, { css } from 'styled-components';

import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 89px 0px 64px;
  background: linear-gradient(
    83.12deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(222, 24, 36, 0.1) 99.84%
  );

  ${({ showAnnouncementBar }) =>
    showAnnouncementBar &&
    css`
      padding-top: 187px;
    `}

  ${atMinWidth.md`
    padding: 119px 0px 96px;
    ${({ showAnnouncementBar }) =>
      showAnnouncementBar &&
      css`
        padding-top: 175px;
      `}
  `}
`;

export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 24px;
  margin: 0px auto;

  ${atMinWidth.sm`
    padding: 0px 35px;
  `}

  ${atMinWidth.xl`
    max-width: 1240px;
    gap: 64px;
  `}
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;

  ${atMinWidth.xl`
    display: grid;
    grid-template-columns: 1fr 500px;
    align-items: center;
    gap: 30px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  .author {
    margin: 0px;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .heading-kicker {
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${font('overline', 'sm', '700')}
    color: ${color.primary[700]};

    ${atMinWidth.sm`
      flex-direction: row;
      align-items: center;
    `}

    span:first-child {
      color: ${color.yellow[800]};
    }
  }

  .heading {
    ${font('display', 'sm', '700')}
    color: ${color.darkBlue[900]};

    ${atMinWidth.xs`
      ${font('display', 'md', '700')}
    `}
  }

  .subhead {
    ${font('text', 'md', '400')}
    color: ${color.darkBlue[600]};
  }
`;

export const Image = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
