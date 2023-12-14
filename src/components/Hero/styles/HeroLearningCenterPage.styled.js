import styled from 'styled-components';
import { font } from '../../../atoms/typography';
import { color } from '../../../atoms/colors';
import { atMinWidth } from '../../../atoms/breakpoints';

import BackgroundXl from '../assets/learning-center-hero-bg-xl.png';
import BackgroundLg from '../assets/learning-center-hero-bg-lg.png';
import BackgroundMd from '../assets/learning-center-hero-bg-md.png';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 80px 0px;
  overflow: hidden;
  background-image: url(${BackgroundMd});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${atMinWidth.md`
    background-image: url(${BackgroundLg});
  `}
  ${atMinWidth.xl`
    padding: 96px 0px;
    background-image: url(${BackgroundXl});
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 0px 19px;
  margin: 0px auto;
  ${atMinWidth.sm`
    padding: 0px 35px;
  `}
  ${atMinWidth.xl`
    max-width: 1240px;
  `}
`;
export const Container = styled.div`
  width: 100%;
  max-width: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 0px auto;
  .heading {
    ${font('display', 'xl', '800')}
    color: ${color.darkBlue[900]};
    text-align: center;
  }
  .subhead {
    ${font('text', 'lg', '400')}
    color: ${color.darkBlue[600]};
    text-align: center;
  }
  #defaultSearchBar {
    width: 100%;
    max-width: 100%;
  }
`;
export const Carousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .slick-list {
    overflow: hidden;
    margin-right: -16px;
    ${atMinWidth.sm`
        overflow: visible;
    `}
    ${atMinWidth.xl`
      margin-right: -30px;
    `}
  }
  && .slick-track {
    display: flex;
  }
  && .slick-slide {
    width: 316px;
    height: inherit;
    ${atMinWidth.xl`
      width: 330px;
    `}
  }
  .slick-slide > div {
    height: 100%;
    margin-right: 16px;
    ${atMinWidth.xl`
      margin-right: 30px;
    `}
  }
`;
export const Controls = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 0px auto;
`;
export const Dot = styled.button`
  width: 8px;
  height: 8px;
  background-color: #33394b;
  opacity: 0.5;
  padding: 0px;
  margin: 0px;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: all 250ms ease-in-out;
  &.active,
  &:hover,
  &:focus {
    background-color: #33394b;
    outline: none;
    opacity: 1;
    transform: scale(1.3);
  }
`;
