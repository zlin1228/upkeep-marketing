import styled from 'styled-components';
import heroBackgroundDark from '../../../assets/background/hero-bg-dark.svg';

export const Hero = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  padding: 0px 0px 0px;
  margin-bottom: 120px;
  background-repeat: no-repeat;
  background-position: 0 0, 100% 100%;
  background-size: cover;
  background-image: url(${heroBackgroundDark});
  background-color: #1a1f31;
`;
export const BreadcrumbsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0px auto 40px;
  .breadcrumbs_container {
    max-width: 100%;
    padding: 0px;
    margin: 0px auto;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  transform: translateY(120px);
`;
export const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px;
  filter: drop-shadow(0px 2px 40px rgba(10, 16, 34, 0.1));
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const Thumbnail = styled.div`
  width: 100%;
  flex-basis: 60%;
  height: 100%;
  min-height: 455px;
  max-height: 455px;
  overflow: hidden;
  @media (max-width: 991px) {
    min-height: 350px;
    max-height: 350px;
  }
  @media (max-width: 499px) {
    min-height: 200px;
    max-height: 200px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    min-height: 480px;
    @media (max-width: 991px) {
      min-height: 350px;
      max-height: 350px;
    }
    @media (max-width: 499px) {
      min-height: 200px;
      max-height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
      min-height: 480px;
      object-fit: cover !important;
      object-position: center left !important;
      @media (max-width: 991px) {
        min-height: 350px;
        max-height: 350px;
      }
      @media (max-width: 499px) {
        min-height: 200px;
        max-height: 200px;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    min-height: 480px;
    object-fit: cover !important;
    object-position: center left !important;
    @media (max-width: 991px) {
      min-height: 350px;
      max-height: 350px;
    }
    @media (max-width: 499px) {
      min-height: 200px;
      max-height: 200px;
    }
  }
`;
export const Details = styled.div`
  width: 100%;
  flex-basis: 40%;
  min-width: 540px;
  height: 100%;
  min-height: 455px;
  max-height: 455px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 56px;
  background: #ffffff;
  @media (max-width: 991px) {
    min-width: auto;
    min-height: auto;
    max-height: auto;
  }
  @media (max-width: 768px) {
    padding: 32px;
  }
  @media (max-width: 499px) {
    padding: 24px;
  }
`;
export const Tag = styled.h5`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  width: fit-content;
  height: 27px;
  border-radius: 4px;
  background: rgba(0, 123, 255, 0.15);
  margin-bottom: 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #004a99;
`;
export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  color: #33394b;
  font-size: 30px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 1.125em;
    margin-bottom: 8px;
  }
`;
export const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16.5px;
  line-height: 26px;
  color: #515667;
  margin-bottom: 0px;
  margin-bottom: 16px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16.5px;
    line-height: 26px;
    color: #515667;
    margin-bottom: 0px;
  }
`;
export const CallToActionStyles = `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 24px;
  width: fit-content;
  min-height: 41px;
  background: #007bff;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  &:hover {
    background: #0056b3;
    color: white;
  }
`;
