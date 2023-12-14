import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e0e6ed;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  margin: 0px;
  border-radius: 8px;
  overflow: hidden;
  input {
    width: 96%;
    height: 100%;
  }
  input[type='text'] {
    outline: none;
    border: none !important;
  }
  input::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    color: #707481;
  }
`;
export const SearchIcon = styled.div`
  width: 4%;
  display: grid;
  place-items: center;
  margin-right: 10px;
`;
