import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  height: auto;
  padding: 32px;
  background: white;
  border: 1px solid rgb(230, 242, 255);
  box-shadow: rgb(10 16 34 / 10%) 0px 2px 40px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  svg {
    width: 50px;
    height: 50px;
    opacity: 0.9;
    margin-bottom: 24px;
    path {
      fill: #007bff;
    }
  }
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
`;
