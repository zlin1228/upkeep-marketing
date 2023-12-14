import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1202px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 39px auto 0px;
`;
export const Dot = styled.button`
  width: 8px;
  height: 8px;
  background: #33394b;
  opacity: 0.5;
  padding: 0px;
  outline: none;
  border: none;
  border-radius: 9999px;
  margin: 0px 16px;
  transition: all 250ms ease-in-out;
  @media (max-width: 992px) {
    visibility: hidden;
  }
  &:hover,
  &:focus,
  &.active {
    transform: scale(1.5);
    outline: none;
    border: none;
    background: #33394b;
    opacity: 1;
  }
`;
