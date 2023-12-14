import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 650px;
  background: linear-gradient(173deg, #f5f6f9 47.6%, #0d1419 47.64%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  padding: 0px 30px;
`;
export const Frame = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(
      199.73deg,
      rgba(255, 255, 255, 0.2) 41.49%,
      rgba(255, 240, 243, 0.2) 78.73%
    ),
    #ffffff;
  box-shadow: 0px 10px 20px rgba(50, 50, 51, 0.1);
  border-radius: 24px;
  padding: 64px 0px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1052px;
  height: auto;
  text-align: center;
  margin: 0px auto;
  padding: 0px 30px;
  .heading,
  .subhead {
    margin-bottom: 32px;
  }
  .heading {
    font-size: 2.444rem;
    line-height: 3.111rem;
    @media (max-width: 768px) {
      font-size: 1.602rem;
      line-height: 2.222rem;
    }
  }
  .subhead {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #0d141a;
  }
  .disclaimer {
    font-style: normal;
    font-weight: 400;
    font-size: 13.5px;
    line-height: 150%;
    color: #697891;
    margin-bottom: 0px;
  }
`;
export const Buttons = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  margin: 0px auto 24px auto;
  a {
    width: auto;
    height: auto;
    padding: 16px 28px;
    border-radius: 6px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  a:first-child {
    margin-right: 8px;
  }
  a:last-child {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    a {
      width: 100%;
      padding: 14px 26px;
    }
    a:first-child {
      margin: 0px 0px 16px;
    }
    a:last-child {
      margin: 0px;
    }
  }
`;
