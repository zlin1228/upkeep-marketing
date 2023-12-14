import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;
  position: relative;
  align-items: center;
  margin: 32px auto;
  display: none;
  @media (max-width: 991px) {
    display: flex;
  }
`;
export const IconContainer = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20%;
  right: 0px;
  display: grid;
  place-items: center;
`;
export const Dropdown = styled.select`
  position: relative;
  background: transparent;
  width: 100%;
  padding-left: 10px;
  z-index: 100;
  cursor: pointer;
  border-radius: 8px;
`;
