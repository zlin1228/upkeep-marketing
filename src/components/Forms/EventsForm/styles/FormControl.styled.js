import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 12px;
  svg {
    position: absolute;
    top: 12.5px;
    right: 12.5px;
    z-index: 100;
    opacity: 0.9;
    &.invalid-icon path {
      fill: rgb(153, 32, 25);
    }
    &.valid-icon path {
      fill: rgb(0, 74, 153);
    }
  }
`;
export const Label = styled.label`
  display: none;
`;
export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 44px;
  padding: 12px;
  z-index: 10;

  font-size: 13px;
  line-height: 13px;
  color: rgb(81, 86, 103);
  margin-bottom: 4px;
  border-radius: 6px;
  border: 1px solid rgb(81, 86, 103);
  box-shadow: rgb(22 29 37 / 5%) 0px 4px 2px;
  transition: all 250ms ease-in-out;
  &.valid {
    color: rgb(0, 74, 153);
    border-color: rgb(0, 74, 153);
  }
  &.invalid {
    color: rgb(153, 32, 25);
    border-color: rgb(153, 32, 25);
    &::placeholder {
      color: rgb(153, 32, 25);
    }
  }
`;
export const Error = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: rgb(153, 32, 25);
`;
