import styled from 'styled-components';

export const ReviewIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .social_rating {
    display: flex;
    align-items: center;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #fafcfe;
    margin-bottom: 22px;
    @media (max-width: 499px) {
      font-size: 16px;
      line-height: 25px;
    }
  }
  .social_stars {
    width: 100%;
    height: auto;
    display: flex;
    margin-right: 15px;
    @media (max-width: 768px) {
      margin-right: 7.5px;
    }
    svg {
      margin-right: 7px;
      width: 20.69px;
      height: 21.01px;
      background: red;
      @media (max-width: 768px) {
        margin-right: 0px;
        font-size: 0.75rem;
      }
    }
  }
  .social_logos {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    width: 100%;
    max-width: 438.6px;
    height: 100%;

    .gatsby-image-wrapper {
      width: 100%;
      min-width: 120px;
      height: 100%;
      max-height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 24px;
      @media (max-width: 768px) {
        margin: 0px 6px;
        min-width: 75px;
        max-width: 75px;
      }
      img {
        object-fit: contain !important;
      }
    }
  }
`;
