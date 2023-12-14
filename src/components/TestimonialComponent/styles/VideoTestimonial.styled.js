import styled from 'styled-components';

export const SlideWrapper = styled.div`
  position: relative;
  width: auto;
  height: 581px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 18px 58px rgba(10, 16, 34, 0.25);
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 992px) {
    height: 437px;
  }
  @media (max-width: 675px) {
    height: 285px;
  }
  @media (max-width: 499px) {
    height: 190px;
  }
  h6 {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: auto;
    margin: 0px auto;
    padding: 0px 32px 32px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    z-index: 100;
    transform: translateY(100%);
    opacity: 0;
    transition: all 250ms ease-in-out;
    @media (max-width: 992px) {
      opacity: 1;
      transform: translateY(0%);
    }
    @media (max-width: 499px) {
      padding: 0px 16px 16px;
    }
  }
  .overlay {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    z-index: 99;
    opacity: 0;
    transform: translateY(100%);
    transition: all 250ms ease-in-out;
    @media (max-width: 992px) {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  .slide-image {
    position: absolute !important;
    inset: 0px !important;
    width: 100%;
    height: 100%;
    img {
      transition: all 250ms ease-in-out !important;
      object-fit: cover !important;
    }
  }
  &:hover {
    h6 {
      opacity: 1;
      transform: translateY(0%);
    }
    .overlay {
      opacity: 1;
      transform: translateY(0%);
    }
    .slide-image img {
      transform: scale(1.1);
    }
  }
`;
