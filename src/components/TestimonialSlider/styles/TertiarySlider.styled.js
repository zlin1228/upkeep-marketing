import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  @media (max-width: 992px) {
    padding: 64px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 15px;
  margin: 0px auto;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 37.32px;
    line-height: 48px;
    text-align: center;
    color: #0d141a;
    margin-bottom: 32px;
    @media (max-width: 768px) {
      font-size: 25.92px;
      line-height: 32px;
    }
  }
  .controls {
    max-width: 530px;
    margin-top: 48px;
    padding: 0px;
    transform: translateX(0px);
    @media (max-width: 992px) {
      margin: 32px auto 0px;
    }
    .dot {
      background: #697891;
      @media (max-width: 992px) {
        visibility: visible;
      }
    }
    .prev,
    .next {
      svg path {
        fill: #b3bbcb;
      }
      svg rect {
        stroke: #b3bbcb;
      }
      &:hover,
      &:focus {
        &::before {
          background: #b3bbcb;
        }
        svg path {
          fill: #ffffff;
        }
        svg rect {
          stroke: #b3bbcb;
        }
      }
      @media (max-width: 992px) {
        display: block;
      }
    }
  }
`;
