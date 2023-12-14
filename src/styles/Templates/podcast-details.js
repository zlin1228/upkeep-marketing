import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 48px 0px 96px;
  @media (max-width: 991px) {
    padding: 48px 0px 64px;
  }
  @media (max-width: 768px) {
    padding: 48px 0px 48px;
  }
`;
export const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1110px;
  height: auto;
  padding: 0px 70px 0px 0px;
  margin: 0px auto;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    padding: 0px 35px;
  }
  @media (max-width: 499px) {
    padding: 0px 15px;
  }
  .podcast-video {
    margin-bottom: 24px;
  }
  .social-share {
    width: fit-content;
    height: fit-content;
    position: sticky;
    top: 100px;
    left: 15px;
    padding-right: 35px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .social-share h4 {
    display: none;
  }
  .subcription-links {
    justify-content: flex-start;
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const Audio = styled.div`
  width: 100%;
  height: auto;
  margin: 48px 0px 0px;
  p {
    height: 100%;
    margin-bottom: 0px;
  }
  iframe {
    width: 100%;
    height: 100%;
    max-height: 200px;
    margin: 0px;
    border: 1px solid #eceef6;
    border-radius: 16px;
    overflow: hidden;
    @media (max-width: 992px) {
      max-height: 100px;
    }
  }
`;
