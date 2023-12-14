import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 840px;
  height: auto;
  text-align: center;
  padding: 0px 35px;
  margin: 0px auto;
  .kicker {
    line-height: initial;
  }
  .heading {
    color: #1a2834;
  }
  .subhead {
    color: #515667;
    margin-bottom: 24px;
  }
`;
export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    width: auto;
    height: 45px;
    border-radius: 4px;
    margin: 0px 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    .button {
      width: 100%;
      margin: 0px;
    }
    .button:first-child {
      margin-bottom: 16px;
    }
  }
`;
