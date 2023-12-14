import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 96px 0px;
  background: #f5f6f9;
  @media (max-width: 768px) {
    padding: 64px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 950px;
  height: auto;
  padding: 0px 30px;
  margin: 0px auto;
`;
export const Icons = styled.div`
  width: 100%;
  max-width: 690px;
  height: auto;
  margin: 0px auto 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    width: 96px !important;
    height: 96px !important;
    @media (max-width: 576px) {
      width: 64px !important;
      height: 64px !important;
    }
  }
  @media (max-width: 576px) {
    margin: 0px auto 48px;
  }
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  @media (max-width: 576px) {
    margin-bottom: 48px;
  }
  p {
    font-style: normal;
    font-size: 25.92px;
    line-height: 32px;
    text-align: center;
    color: #282f3c;
    @media (max-width: 499px) {
      font-size: 18.92px;
      line-height: 26px;
    }
  }
`;
export const PrimaryButton = css`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  margin: 0px auto;
  border-radius: 6px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  text-align: center;
  opacity: 1;
  transition: all 300ms ease-in-out;
`;
