import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const PageBanner = styled.section`
  position: relative;
  background-size: cover;
  margin-top: 0 !important;
  margin-bottom: 250px;
  padding-top: 50px !important;
  background-repeat: no-repeat;
  background-position: 0px 0px, 100% 100%;
  background-size: cover;
  color: rgb(192, 198, 222);
  background-image: url('https://d33wubrfki0l68.cloudfront.net/24c6aa4fa8d20f36d222e442744ad9437ff72d9e/34d7a/static/left-accent-dark-ebc15c619ab292483c2635327354148c.png'),
    url('https://d33wubrfki0l68.cloudfront.net/7568ca688db70e55eeaf1ff54deffdef9f7e9273/85ff2/static/right-accent-dark-19613261d5e0c5eaeb76f1931ad1b8be.png');
  background-color: #0c1b2b;
  min-height: 547px;
  @media (max-width: 991px) {
    min-height: 768px;
    margin-bottom: 0px;
  }
  @media (max-width: 767px) {
    margin-bottom: 100px;
  }
`;
export const Breadcrumbs = styled.div`
  height: 27px;
  margin: 2rem 0rem;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
export const CardFrame = styled(Row)`
  position: absolute;
  height: 455px;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;
export const CardImage = styled(Col)`
  position: relative;
  padding-left: 0px;
  padding-right: 0px;
  @media (max-width: 992px) {
    overflow: hidden;
    order: 2;
  }
  .gatsby-image-wrapper {
    position: initial !important;
    img {
      object-position: left !important;
    }
  }
`;
export const CardDetails = styled(Col)`
  background: #ffffff;
  padding: 56px;
  @media (max-width: 992px) {
    padding: 40px;
    order: 1;
  }
  .featured_tag {
    width: 150px;
    height: 27px;
    background: rgba(0, 123, 255, 0.15);

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #004a99;
    display: grid;
    place-items: center;
    margin-bottom: 16px;
  }
  .featured_title {
    font-weight: bold;
    font-size: 31.1px;
    line-height: 36px;
    color: #33394b;
    margin-bottom: 16px;
  }
  .featured_description {
    color: #707481 !important;
    margin-bottom: 32px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #707481 !important;
      margin-bottom: 48px;
    }
  }
  .featured_link {
    line-height: 18px;
    color: #ffffff;
    width: 160px;
    background: #007bff;
    box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
    padding: 14px 28px;
    font-size: 0.833rem;
    font-weight: bold;
    &:hover {
      background: #0356b3;
    }
  }
`;
