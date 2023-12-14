import styled from 'styled-components';
import heroBackgroundBlueGray from '../../../assets/background/hero-bg-blue-gray-angled.svg';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { atMinWidth } from '../../../atoms/breakpoints';

export const Hero = styled.div`
  background-size: cover;
  margin-top: 0 !important;
  height: 650px;
  h1 {
    font-size: 55px;
    font-weight: bold;
    margin-bottom: 20px !important;
  }
  padding-top: 50px !important;
  background-repeat: no-repeat;
  background-position: 0px 0px, 100% 100%;
  background-size: cover;
  color: rgb(192, 198, 222);
  background-image: url(${heroBackgroundBlueGray});
  background-color: ${color.darkGrey[50]};
  @media (min-width: 1700px) {
    background-position: 0px -50px, 100% 100%;
  }
`;

export const HeroWrapper = styled.section`
  padding: 130px 0 50px;
  &.keep-center {
    text-align: center;
  }
  &.keep-left {
    text-align: left;
  }
  @media (max-width: 568px) {
    padding: 100px 0 30px;
  }
  width: 100%;
  &.dark {
    background: transparent;
    h1,
    h2,
    h3,
    h4,
    div {
      color: ${color.common.white};
    }
  }
`;

export const BreadcrumbsWrapper = styled.div`
  margin-bottom: 32px;
`;

export const Heading = styled.h2`
  max-width: 770px;
  margin: 0px auto 16px auto !important;
  ${font('display', 'md', '700')}
  ${atMinWidth.lg`
     ${font('display', 'lg', '700')}
 `}
`;

export const HeadingKicker = styled.h5`
  color: ${color.common.white};
  ${font('overline', 'lg', '700')}
`;

export const Subhead = styled.div`
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
  text-align: center;
  ${font('text', 'lg', '400')}
`;
