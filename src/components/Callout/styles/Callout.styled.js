import styled, { css } from 'styled-components';
import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import RedBg from '../../../assets/background/callout-red-bg.svg';

const backgrounds = {
  white: css`
    background: #fff;
  `,
  'red-angle': css`
    background: url(${RedBg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  `,
};

export const Section = styled.section`
  overflow: hidden !important;
  ${props => backgrounds[props?.background || 'white']}
  padding: 96px 0px;
  @media (max-width: 375px) {
    padding: 64px 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 1230px;
  @media (max-width: 992px) {
    max-width: 830px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
  }
`;

export const HeadingKicker = styled.p`
  color: ${color.primary[700]};
  ${font('overline', 'lg', '700')}
  text-align: center;
  margin-bottom: 24px;
`;

export const Heading = styled.h2`
  color: ${color.darkBlue[900]};
  ${font('display', 'lg', '700')}
  text-align: center;
  margin-bottom: 24px;
`;

export const Subhead = styled.div`
  color: ${color.darkBlue[700]};
  ${font('text', 'md', '400')}
  text-align: center;
  margin-bottom: 64px;
  @media (max-width: 576px) {
    margin-bottom: 32px;
  }
`;

export const SliderWrapper = styled.div`
  overflow: visible;
  .slick-list {
    overflow: visible;
    padding: 0px !important;
    @media (max-width: 992px) {
      padding: 0 50px;
    }
  }
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
  }
  .slick-slide > div {
    height: 100%;
  }
`;
