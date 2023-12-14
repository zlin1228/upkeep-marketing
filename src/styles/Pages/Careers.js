import styled from 'styled-components';

export const Main = styled.main`
  padding: 0px;
  margin: 0px;
  .social-proof-wrapper {
    padding: 116px 0px 90px 0px;
    max-width: 771px;
    @media (max-width: 768px) {
      padding: 32px 0px;
    }
  }
  .trustbar-wrapper {
    padding: 0px;
  }
`;
export const HeroWrapper = styled.div`
  padding: 0px;
  margin: 0px;
  h1 {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  h5 {
    color: #37c06b;
  }
  a {
    margin-right: 0px;
  }
`;
export const SwitchbackWrapper = styled.div`
  padding: 0px;
  margin: 0px;
  background: #f5f6f9;
  img {
    max-width: 499px;
  }
  .subhead-block {
    font-size: 22px;
  }
`;
export const FullWidthBannerWrapper = styled.div`
  padding: 0px;
  margin: 0px;
  .full_width_banner {
    padding: 166px 0px 144px 0px;
  }
  .icon_wrapper {
    display: none !important;
  }
  .image_left {
    transform: translate(-180px, 10px) rotate(0deg);
  }
  .image_right {
    transform: translate(200px, 10px) rotate(0deg);
  }
  .free_trial_wrapper {
    display: none;
  }
  @media (max-width: 991px) {
    .image_left {
      transform: translate(-200px, 10px) rotate(0deg);
    }
    .image_right {
      transform: translate(250, 10px) rotate(0deg);
    }
  }
  @media (max-width: 768px) {
    .full_width_banner {
      padding: 96px 0px;
    }
    .image_left,
    .image_right {
      display: none;
    }
  }
`;
export const TeamImageWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
`;
export const TeamImage = styled.img`
  width: 100%;
  max-width: 971px;
  height: auto;
  margin: 0px auto;
  display: flex;
`;
export const VideoGridWrapper = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(1800deg, #f5f6f9 30%, #ffffff 30%);
  .grid_wrapper {
    padding-bottom: 50px;
    @media (max-width: 768px) {
      padding-bottom: 0px;
    }
  }
`;
