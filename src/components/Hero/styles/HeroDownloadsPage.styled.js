import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const HeroContainer = styled.div`
  position: relative;
  padding: 120px 0px 96px;
  background-repeat: no-repeat;
  background-position: 0 0, 100% 100%;
  background-size: cover;
  overflow: hidden;
  ${atMinWidth.xs`
    padding: 120px 0px 96px;
  `}
  ${props =>
    props?.showAnnouncementBar
      ? `padding: 190px 0px 96px;
      @media(max-width: 499px) {
        padding: 200px 0px 90px;
      }
      `
      : `
      padding: 120px 0px 96px 0px;
      @media(max-width: 991px) {
        padding: 120px 0px 64px;
      }
  `}
`;
export const BreadcrumbsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0px 30px;
  ${atMinWidth.lg`
    max-width: 1200px;
  `}
`;
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 15px 0px;
  margin-top: 32px;
  column-gap: 32px;
  ${atMinWidth.xs`
    padding: 32px 30px 0px;
  `}
  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: 470px 1fr;
    max-width: 1200px;
  `}
`;
export const DetailsWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  ${atMinWidth.lg`
    margin-bottom: 0px;
  `}
`;
export const HeadingKicker = styled.div`
  ${font('overline', 'lg', '700')}
  color: ${color.primary[700]};
`;
export const Heading = styled.h1`
  ${font('display', 'md', '700')}
  color: ${color.darkBlue[900]};
  ${atMinWidth.sm`
    ${font('display', 'lg', '700')}
  `}
`;
export const Subhead = styled.div`
  ${font('text', 'lg', '400')}
  color: ${color.darkBlue[600]};
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  transform: translateZ(0);
  ${atMinWidth.lg`
    width: 100%;
    max-width: 670px;
    height: 376px;
  `}
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    ${atMinWidth.lg`
      position: relative;
    `}
  }
`;
