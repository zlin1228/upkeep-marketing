import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 360px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonOverlay = styled.button`
  position: absolute;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 100;
  padding: 0px;
  outline: none;
  border: none;
  background: none;
  &:hover {
    outline: none;
    border: none;
    background: none;
    .play-button {
      background: #0069d9;
    }
  }
  &:focus {
    outline: none;
    border: none;
    background: none;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s;
  background: #007bff;
  svg {
    width: 30px;
    height: 30px;
    transform: translateX(4px);
    path {
      fill: white;
    }
  }
`;
