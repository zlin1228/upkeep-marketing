import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
  .swiper-container {
    width: 100%;
    height: auto;
    padding: 0px 0px 50px 150px;
    overflow: visible;
    @media (max-width: 991px) {
      padding: 0px 15px 50px;
    }
  }
  .swiper-slide {
    height: auto;
  }
  .swiper-button-next {
    color: white;
    width: 50px;
    height: 100%;
    top: 0px;
    right: 0px;
    background: linear-gradient(
      270deg,
      #0b1a2b 24.27%,
      rgba(26, 30, 38, 0) 99.28%
    );
  }
  .swiper-button-prev {
    color: white;
    width: 50px;
    height: 100%;
    top: 0px;
    left: 0px;
    background: linear-gradient(
      -270deg,
      #0b1a2b 24.27%,
      rgba(26, 30, 38, 0) 99.28%
    );
  }
`;
export const Row = styled.div`
  width: 100%;
  max-width: 1680px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 50px 200px 0px 150px;
  @media (max-width: 991px) {
    padding: 50px 15px 0px;
  }
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: flex-start;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 25.92px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 0px;
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 499px) {
      margin-bottom: 20px;
    }
  }
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 13.5px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    &:hover {
      border-bottom: 1px solid white;
    }
    @media (max-width: 991px) {
      width: fit-content;
      height: auto;
      margin-bottom: 0px;
    }
  }
`;
