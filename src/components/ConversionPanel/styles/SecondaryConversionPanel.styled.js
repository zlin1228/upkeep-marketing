import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 670px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
  @media (max-width: 992px) {
    min-height: auto;
    padding: 48px 0px;
  }
`;
export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0px;
  z-index: -1;
  object-fit: cover;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  padding: 0px 30px;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin: 0px auto;
  padding: 64px 15px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(50, 50, 51, 0.1);
  border-radius: 24px;
`;
export const Frame = styled.div`
  width: 100%;
  max-width: 770px;
  height: auto;
  text-align: center;
  margin: 0px auto;
  .heading {
    font-weight: bold;
    font-size: 44px;
    line-height: 56px;
    color: #282f3c;
    margin-bottom: 32px;
    @media (max-width: 768px) {
      font-size: 1.602em;
      line-height: 1.15;
      margin-bottom: 16px;
    }
    @media (max-width: 768px) {
      font-size: 1.302em;
      line-height: 1.3;
    }
  }
  .subhead {
    font-size: 18px;
    line-height: 26px;
    color: #1a2834;
    margin-bottom: 32px;
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
  .disclaimer {
    font-size: 13.5px;
    line-height: 20px;
    color: #697891;
  }
`;
export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 24px;
  padding: 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  a {
    display: block;
    width: auto;
    height: auto;
    padding: 16px 28px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    @media (max-width: 768px) {
      width: 100%;
      padding: 8px 28px;
    }
    @media (max-width: 499px) {
      font-size: 16px;
    }
  }
  a.primary {
    background: #e9291f;
    border: 2px solid #e9291f;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    color: #ffffff;
    &:hover {
      color: #ffffff;
      background: #c3000c;
      border: 2px solid #c3000c;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
  a.secondary {
    background: #ffffff;
    border: 2px solid #e9291f;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    color: #de1824;
    &:hover {
      border: 2px solid #c3000c;
      color: #c3000c;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
  a:first-child {
    margin-right: 16px;
    @media (max-width: 768px) {
      margin: 0px 0px 16px 0px;
    }
  }
`;
