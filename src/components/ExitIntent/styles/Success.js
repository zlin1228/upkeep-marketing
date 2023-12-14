import styled from 'styled-components';

export const SuccessMessage = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  h2 {
    margin-bottom: 16px;
    ${props => props?.type !== 'Popup' && `color: #ffffff;`}
  }
  p {
    margin-bottom: 0px;
    ${props => props?.type !== 'Popup' && `color: #ffffff;`}
  }
  button {
    width: 100%;
    height: auto;
    min-height: 44px;
    background: #006de6;
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 0px;
    margin: 0px auto;
    font-style: normal;
    font-size: 16px;
    color: #ffffff;
  }
`;
