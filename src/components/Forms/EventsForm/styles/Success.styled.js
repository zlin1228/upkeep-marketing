import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  height: auto;
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
    color: #0b1a2b;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 0px;
  }
`;
