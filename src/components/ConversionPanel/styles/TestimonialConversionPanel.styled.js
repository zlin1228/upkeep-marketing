import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContainerCarousel = styled(Container)`
  .cus-logo {
    max-width: 150px;
    @media (max-width: 500px) {
      max-width: 100%;
    }
  }
  .slide-panel {
    position: relative;
    padding: 26px 0 10px;

    font-size: 15px;
    &:before {
      content: '';
      position: absolute;
      background: #cfd6da;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0;
    }
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      top: 0;
      left: 0;
      background: #007bff;
    }
    &.active:after {
      width: 100%;
      transition: width 8s linear;
    }
    .carousel-logo {
      height: 30px;
    }
    .rating {
      color: #33394b;
      line-height: 20px;
      margin-bottom: 8px;
    }
    .review {
      margin-bottom: 8px;
      line-height: 20px;
    }
    .cus-star {
      max-width: 100%;
    }
  }
`;
export const Carousel = styled.div`
  position: relative;
`;
export const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateY(25px);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
  .quote {
    color: #33394b;
    font-weight: 600;
    font-style: italic;
    line-height: 24px;
  }
  .author {
    margin-top: 24px;
    font-weight: 600;
    font-size: 15px;
  }
  .cus-company {
    font-size: 15px;
  }
`;
