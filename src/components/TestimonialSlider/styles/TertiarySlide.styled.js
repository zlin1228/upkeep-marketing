import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 15px;
  cursor: grab;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 866.12px;
  height: auto;
  margin: 0px auto;
  padding: 71px 0px 0px;
  .quote-icon:first-child {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .quote-icon:last-child {
    position: absolute;
    right: 0px;
    bottom: 0px;
    transform: rotate(180deg);
  }
  @media (max-width: 768px) {
    .quote-icon {
      width: 67.82px;
      height: 64px;
    }
  }
`;
export const Text = styled.div`
  width: 100%;
  max-width: 770px;
  height: auto;
  margin: 0px auto;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 25.92px;
    line-height: 32px;
    text-align: center;
    color: #c20a00;
    @media (max-width: 768px) {
      font-size: 21.6px;
      line-height: 32px;
    }
  }
`;
export const Author = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 32px;
  h6 {
    font-style: normal;
    font-weight: 700;
    font-size: 21.6px;
    line-height: 32px;
    color: #282f3c;
    margin-bottom: 0px;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #95a0b4;
    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
