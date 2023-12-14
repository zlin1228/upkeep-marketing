import styled from 'styled-components';
import { Link } from 'gatsby';

export const Main = styled.main`
  padding: 0px;
  margin: 0px;
  background: #060606;
  width: 100%;
  height: auto;
`;

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  h5 {
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #cce5ff;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 44.79px;
    line-height: 49px;
    text-align: center;
    color: #fafafa;
    margin-bottom: 16px;
  }

  p {
    max-width: 772px;
    font-size: 21.6px;
    line-height: 32px;
    text-align: center;
    color: #fafafa;
    margin-bottom: 16px;
  }
`;

export const Grid = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 100px 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px 14px 15px;
`;

export const CompareCta = styled(Link)`
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #007bff;
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
    border-top: 2px solid #3395ff;
    border-right: 2px solid #3395ff;
    transition: all 0.3s ease;
  }
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 13px);
    width: 0;
    opacity: 0;
    border-bottom: 2px solid #3395ff;
  }
`;
