import styled from 'styled-components';
import { atMinWidth } from '../../../../atoms/breakpoints';
import { font } from '../../../../atoms/typography';
import { color } from '../../../../atoms/colors';
import LightBlueMobile from '../assets/light-blue-mobile.svg';
import LightBlueTablet from '../assets/light-blue-tablet.svg';
import LightBlueDesktop from '../assets/light-blue-desktop.svg';

export const Section = styled.section`
  background-image: url(${LightBlueMobile});
  background-repeat: none;
  background-position: center;
  background-size: cover;
  padding: 56px 0px;
  ${atMinWidth.lg`
    padding: 72px 0px;
    background-image: url(${LightBlueTablet});
  `}
  ${atMinWidth.xl`
    background-image: url(${LightBlueDesktop});
    padding: 96px 0px;
  `};
`;

export const HeaderWrapper = styled.div`
  margin: 0px auto;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16;
  text-align: center;
  ${atMinWidth.sm`
     max-width: 566px;
  `}
  ${atMinWidth.lg`
       max-width: 830px;
  `}
`;

export const Kicker = styled.p`
  ${font('overline', 'lg', '700')}
  color: ${color.primary[700]};
`;

export const Heading = styled.h2`
  ${font('display', 'md', '700')}
  ${atMinWidth.lg`
    ${font('display', 'lg', '700')}
    color: ${color.darkBlue[900]};
  `}
`;
export const Subhead = styled.div`
  ${font('text', 'lg', '400')}
  color: ${color.darkBlue[600]};
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 8px;
  a {
    width: 100%;
  }
  ${atMinWidth.lg`
     flex-direction: row;
     justify-content: center;
     gap: 16px;
    a {
      width: max-content;
    }
  `}
`;

export const SliderWrapper = styled.div`
  margin-top: 48px;
  .slick-list {
    padding: 30px 50px !important;
    ${atMinWidth.lg`
      padding: 60px 50px !important;
   `};
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    height: inherit;
    ${atMinWidth.sm`
      height: 362px;
      width: calc(400px * 0.95);
   `}
    ${atMinWidth.lg`
      height: 625px;
      min-width: calc(590px / 0.75);
   `}
    @media(min-width: 1700px) {
      height: 680px;
      min-width: calc(680px / 0.75);
    }
  }
`;
