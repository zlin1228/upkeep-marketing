import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const TestimonialContainer = styled(Container)`
  padding: 50px 0;
  .subhead {
    margin: 0 auto 45px;
    max-width: 725px;
  }
`;

export const TestimonialContent = styled.div`
  padding: 47px 0;
  h4 {
    font-size: 25.92px;
  }
  .heading-item p {
    max-width: 220px;
    margin: 0 auto;
  }
  .fiveStar {
    height: 26px;
    margin-bottom: 21.47px;
  }
  .carousel-container {
    overflow: hidden;
  }
  .carousel {
    flex-wrap: nowrap;
    transition: all 0.3s;
  }
  .testimonial-ctrl {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    height: calc(100% - 28px);
    width: 150px;
    z-index: 10;
    color: #ffffff;
    cursor: pointer;
    border: none;
    outline: none;
    z-index: 9999;
    &.backward {
      left: 0;
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
      svg {
        margin-left: 24%;
      }
    }
    &.forward {
      right: 0;
      /* background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%); */
      background: linear-gradient(
        270deg,
        #1a1e26 24.27%,
        rgba(26, 30, 38, 0) 106.28%
      );
      svg {
        margin-left: 74%;
      }
    }
  }
  p {
    font-size: 15px;
    line-height: 22px;
    &.item-title {
      margin-bottom: 16px;
      font-weight: bold;
    }
  }
  .fiveStar-sm {
    height: 17px;
    margin-bottom: 15px;
  }
  .testimonial-item {
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e0e6ed;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .testimonial-source {
    img {
      width: 14px;
      margin-right: 12px;
    }
    .sourceName {
      color: #33394b;
      font-weight: 600;
      font-size: 13.5px;
      line-height: 16px;
    }
  }
  .bullet {
    width: 24px;
    height: 3px;
    background: rgba(0, 123, 255, 0.15);
    margin: 24px 4px;
    transition: all 0.3s;
    &.active {
      background: #007bff;
    }
  }
  .reviewer {
    height: 52px;
    width: 100%;
    display: flex;
  }
  .reviewer_thumbnail {
    width: 30px;
    height: 30px;
    margin: 0.5rem 0.5rem 0rem 0rem;
    img {
      object-fit: contain;
      width: 30px;
      height: 30px;
      border-radius: 9999px;
    }
  }
  .reviewer_name {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #33394b;
    margin-bottom: 0.25rem;
  }
  .reviewer_role {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #707481;
  }
`;
