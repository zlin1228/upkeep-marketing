import styled from 'styled-components';
import BannerImg from '../../assets/background/signup.png';

export const Main = styled.div`
  padding-top: 40px;
  background: url(${BannerImg}) 0 0 no-repeat;
  background-size: cover;
  margin-top: 0 !important;
  color: #fff;
  .logo {
    width: 132px;
    margin-bottom: 64px;
  }
  .container {
    max-width: 769px;
    h2 {
      font-weight: bold;
      font-size: 31.1px;
      line-height: 41px;
      color: #fff;
      margin-bottom: 24px;
    }
    h5 {
      color: #fff;
    }
    .sub-desc {
      margin-bottom: 64px;
    }
  }
`;
export const ContentWrapper = styled.div`
  padding-bottom: 96px;
`;
export const Footer = styled.div`
  background: #1a1d26;
  padding: 40px;
  text-align: center;

  font-size: 15px;
  color: #fff;
  .logo {
    width: 132px;
    margin-bottom: 24px;
  }
  p {
    margin: 0;
    &.mb-24 {
      margin-bottom: 24px;
    }
  }
  a {
    color: #fff;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 375px;
  }
  .modal-left {
    position: relative;
    flex-basis: 50%;
    height: 100%;
    background: white;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    place-items: center;
    @media (max-width: 924px) {
      display: none;
      flex-basis: 0%;
    }
    .gatsby-image-wrapper {
      position: initial !important;
      transition: all 0.5s ease-in-out !important;
    }
  }
  .next-image {
    opacity: 0;
  }
  .modal-right {
    flex-basis: 50%;
    padding: 96px;
    background: white;
    height: 100%;
    overflow: hidden;
    @media (max-width: 924px) {
      padding: 72px;
      flex-basis: 100%;
      max-width: 500px;
    }
    @media (max-width: 499px) {
      padding: 72px 15px;
      overflow: initial;
    }
  }
  .form_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 440px;
    margin: 0 auto;
  }
`;
export const InfoWrapper = styled.div`
  max-width: 594px;
  margin: 0 auto;
`;
export const ModalInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 96px;
  z-index: 9999;
  @media (max-width: 924px) {
    display: none;
  }
  .social-star-icon {
    color: #efc75e;
    margin-right: 7px;
    font-size: 13px;
  }
  .social-reviews {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #f9f9f9;
    margin-left: 0.5rem;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
export const LogoWrapper = styled.div`
  position: fixed;
  top: 24px;
  left: 32px;
`;
export const UpKeepLogo = styled.img`
  width: 150px;
  height: 39.36px;
`;
export const HeadingKicker = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 44.79px;
  color: #ffffff;
  margin-bottom: 16px;
`;
export const Subhead = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 16px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 380px;
    li {
      margin-bottom: 13px;
      position: absolute;
      height: 50px;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      ul {
        li {
          width: 322px;
          height: 23px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 22px;
          color: #f9f9f9;
        }
      }
    }
  }
  & > ul > li {
    ul {
      padding: 0;
    }
    padding-left: 40px;
    position: relative;
    line-height: 28px;
    &:before {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #47b97240;
      left: 0;
      top: 2px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='%2347B972' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 12px;
      background-repeat: no-repeat;
    }
  }
`;
export const SignupWrapper = styled.div`
  position: fixed;
  top: 30.68px;
  right: 32px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #33394b;
  margin: 0px 8px;

  a {
    color: #007bff;
    margin-left: 8px;
  }
`;
