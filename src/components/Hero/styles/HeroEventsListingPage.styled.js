import styled from 'styled-components';
import EventsBackgroundLg from '../../../assets/background/events-listing-bg-lg.png';
import EventsBackgroundMd from '../../../assets/background/events-listing-bg-md.png';
import EventsBackgroundSm from '../../../assets/background/events-listing-bg-sm.png';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 124px 0px 64px;
  background-image: url(${EventsBackgroundSm});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${atMinWidth.sm`
    background-image: url(${EventsBackgroundMd});
  `}
  ${atMinWidth.sm`
    background-image: url(${EventsBackgroundLg});
    padding: 124px 0px 96px;
  `}
`;
export const OuterWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  ${atMinWidth.xs`
    padding: 0px 35px;
  `}
  ${atMinWidth.lg`
    max-width: 1230px;
  `}
  nav {
    margin-bottom: 32px;
    ${atMinWidth.sm`
      margin-bottom: 48px;
    `}
    ${atMinWidth.lg`
      margin-bottom: 64px;
    `}
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${atMinWidth.lg`
    display: grid;
    grid-template-columns: 470px 1fr;
    gap: 32px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  ${atMinWidth.lg`
    max-width: 470px;
    text-align: left;
    align-items: flex-start;
  `}
  h5 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${color.primary[700]};
    margin: 0px;
  }
  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    color: ${color.darkBlue[900]};
    margin: 0px;
    ${atMinWidth.xs`
      font-size: 36px;
      line-height: 48px;
    `}
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${color.darkBlue[700]};
    margin: 0px;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  transform: translateZ(0);
  ${atMinWidth.xs`
    aspect-ratio: auto;
  `}
  .gatsby-image {
    width: 100%;
    height: 100%;
  }
`;
