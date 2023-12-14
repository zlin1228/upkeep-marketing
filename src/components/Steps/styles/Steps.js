import styled from 'styled-components';

export const Steps = styled.section`
  padding: 96px;
  background: #060606;
  @media (max-width: 991px) {
    padding: 96px 15px;
  }
  @media (max-width: 768px) {
    padding: 48px 15px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 770px;
  height: 100%;
  margin: 0 auto;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-bottom: 50.5px;
  h2 {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #fafafa;
  }
  div,
  div p {
    font-style: normal;
    font-weight: normal;
    text-align: center;
    color: #fafafa;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  ul {
    padding: 0px;
    margin: 0px;
    width: 100%;
  }

  li {
    padding: 32px 0px;
    border-top: 1px solid #202630;
    border-bottom: 1px solid #202630;
    list-style: none;
    width: 100%;
    height: auto;
    display: flex;
    .step-number {
      font-style: normal;
      font-weight: bold;
      font-size: 25.92px;
      line-height: 32px;
      color: #535963;
      margin-right: 16px;
    }
    .step-info {
      h4 {
        font-style: normal;
        font-weight: bold;
        color: #fafafa;
        margin-bottom: 8px;
      }
      div,
      div p {
        font-style: normal;
        font-weight: normal;
        color: #eaeaec;
      }
    }
  }
`;
