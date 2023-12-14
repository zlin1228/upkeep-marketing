import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: auto;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #0d141a;
    text-transform: none;
    margin: 0px;
    img {
      margin-left: 8px;
    }
  }
`;
export const Close = styled.button`
  width: 24px;
  height: 24px;
  outline: none;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
`;
