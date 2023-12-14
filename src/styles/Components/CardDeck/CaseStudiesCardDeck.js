import styled from 'styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 96px;
  background: rgba(255, 255, 255, 0.05);
  @media (max-width: 1024px) {
    padding: 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
`;
export const Heading = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 72px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  h2 {
    width: 100%;
    max-width: 466px;
    height: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 44.79px;
    line-height: 49px;
    color: #fafcff;
    margin-bottom: 0px;
    @media (max-width: 768px) {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
  a {
    position: relative;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #007bff;
    margin-right: 20px;
    &:hover {
      color: #3395ff;
      &:after {
        right: -24px;
      }
      &:before {
        animation-name: grow-right;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        @keyframes grow-right {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 12px;
          }
        }
      }
    }
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      margin: auto;
      right: -16px;
      transform: translateY(-50%) rotate(45deg);
      transform-origin: bottom;
      width: 6px;
      height: 6px;
      border-top: 2px solid #007bff;
      border-right: 2px solid #007bff;
      transition: all 0.3s ease;
    }
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: calc(100% + 13px);
      width: 0;
      opacity: 0;
      border-bottom: 2px solid #007bff;
    }
  }
`;
export const Grid = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 0px 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;
export const Card = styled.div`
  position: relative;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
  &:hover {
    top: -28px;
    box-shadow: 0px 30px 30px rgba(10, 16, 34, 0.1);

    .animated-link {
      &:after {
        right: -24px;
      }
      &:before {
        animation-name: grow-right;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        @keyframes grow-right {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 12px;
          }
        }
      }
    }
  }
  .clickable {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
  }
  .thumbnail {
    width: 100%;
    min-height: 208px;
    max-height: 208px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .body {
    width: 100%;
    height: auto;
    min-height: 65px;
    margin: 24px auto 8px auto;
    h5 {
      width: 100%;
      height: auto;
      text-transform: initial;
      font-style: normal;
      font-weight: bold;
      font-size: 21.6px;
      line-height: 32px;
      color: #fafcff;
      margin-bottom: 8px;
    }
    p {
      width: 100%;
      height: auto;

      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #eaeaec;
      margin-bottom: 8px;
    }
  }
`;
export const CallToAction = styled(Link)`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
  &:hover {
    color: #007bff;
  }
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    margin: auto;
    right: -16px;
    transform: translateY(-50%) rotate(45deg);
    transform-origin: bottom;
    width: 6px;
    height: 6px;
    border-top: 2px solid #007bff;
    border-right: 2px solid #007bff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #007bff;
  }
`;
