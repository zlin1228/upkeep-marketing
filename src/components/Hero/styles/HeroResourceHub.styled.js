import styled from 'styled-components';
import HeroBackgroundXl from '../../../assets/background/resource-hub-hero-xl.svg';
import HeroBackgroundLg from '../../../assets/background/resource-hub-hero-lg.svg';
import HeroBackgroundMd from '../../../assets/background/resource-hub-hero-md.svg';
import HeroBackgroundSm from '../../../assets/background/resource-hub-hero-sm.svg';

export const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 121px 0px 96px 0px;
  overflow: hidden;
  background-image: url(${HeroBackgroundXl});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 992px) {
    background-image: url(${HeroBackgroundLg});
  }
  @media (max-width: 576px) {
    background-image: url(${HeroBackgroundMd});
    padding: 121px 0px 64px;
  }
  @media (max-width: 499px) {
    background-image: url(${HeroBackgroundSm});
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: auto;
  margin: 0px auto;
  padding: 0px 35px;
  @media (max-width: 992px) {
    max-width: 840px;
  }
  @media (max-width: 499px) {
    padding: 0px 15px;
  }
  nav {
    max-width: 100%;
    margin: 0px 0px 64px 0px;
    padding: 0px;
    @media (max-width: 992px) {
      margin: 0px 0px 32px 0px;
    }
  }
`;
export const Text = styled.div`
  width: 100%;
  max-width: 970px;
  height: auto;
  margin: 0px auto 48px;
  text-align: center;
  @media (max-width: 992px) {
    max-width: 570px;
  }
  @media (max-width: 576px) {
    margin: 0px auto 32px;
  }
`;
export const Heading = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  color: #0d141a;
  margin-bottom: 16px;
  @media (max-width: 992px) {
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
  }
  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
  }
`;
export const Subhead = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #515667;
  margin-bottom: 0px;
  @media (max-width: 992px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #515667;
    margin-bottom: 0px;
    @media (max-width: 992px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
`;
