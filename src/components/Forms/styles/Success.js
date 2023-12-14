import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  background: #ffffff;
  border: 1px solid #e6f2ff;
  box-shadow: 0px 2px 40px rgba(10, 16, 34, 0.1);
  border-radius: 4px;
  @media (max-width: 991px) {
    max-width: 100%;
    width: 100%;
  }
  p {
    color: #0b1a2b;
    max-width: 400px;
    margin: 0px auto;
  }
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 12px;
    width: 100%;
    height: auto;
    background: #007bff;
    border-radius: 4px;
    margin-top: 24px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
`;
