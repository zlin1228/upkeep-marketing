import styled from 'styled-components';
import { color } from '../../../../atoms/colors';

export const Container = styled.div`
  width: 100%;
  margin-top: 38px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  border: none;
  color: black;
  padding: 0px;
  &:hover {
    background: none;
    border: none;
    use {
      fill: ${color.grey[400]};
    }
  }
  &:active,
  &:focus,
  &:focus-visible {
    border: none;
    outline: none;
  }
`;
