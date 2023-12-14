import styled from 'styled-components';

export const BreadcrumbsWrapper = styled.div`
  margin-bottom: 40px;
  grid-area: breadcrumbs;
  display: flex;
  align-items: center;
  .breadcrumbs_container {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
`;

export const FeaturedPodcastWrapper = styled.div`
  width: 100%;
  height: 375.02px;
  margin-bottom: 32px;
  display: flex;
  @media (max-width: 600px) {
    height: 250px;
  }
  .podcast_video {
    margin: 0;
  }
`;

export const Heading = styled.h1`
  max-width: 570px;
  font-style: normal;
  font-weight: bold;
  font-size: 31.1px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 16px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Description = styled.p`
  max-width: 570px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #f9f9f9;
  margin-bottom: 16px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const AuthorIntro = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #f9f9f9;
  margin-bottom: 16px;
`;

export const AuthorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 355px;
  .author {
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

export const Content = styled.div`
  margin-bottom: 32px;
  h5,
  h4,
  h3,
  h2,
  h1,
  p {
    color: white;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 21.6px;
    line-height: 32px;
    margin-bottom: 16px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #f9f9f9;
  }
  iframe {
    width: 100%;
  }
`;

export const DemoCTAWrapper = styled.div`
  max-width: 670px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  @media (max-width: 661px) {
    padding: 32px 24px;
  }
  .cta_header {
    display: flex;
    align-items: center;
    padding: 0px;
    width: 100%;
    margin-bottom: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 24px;
    @media (max-width: 661px) {
      margin-bottom: 16px;
    }
    img {
      margin-right: 16px;
    }
  }
  .cta_description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #f9f9f9;
    margin-bottom: 0px;
    @media (max-width: 661px) {
      font-size: 16px;
    }
  }
  .cta_button {
    padding: 12px 20px;
    max-height: 48px;
    width: 245px;
    height: 48px;
    background: #007bff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 1;
    margin-top: 24px;
    &:hover {
      opacity: 0.7;
    }
  }
`;
