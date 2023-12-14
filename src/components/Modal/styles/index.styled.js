import styled from 'styled-components';

export const Container = styled.dialog`
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 10000;
  background: transparent;
  overflow-y: scroll;
  opacity: 0;
  pointer-events: none;
  transition: all 300ms ease-in-out;
  &.modal-active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const Backdrop = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    outline: none;
    border: none;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: auto;
  max-width: 570px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 30px;
  z-index: 10001;
  margin: auto;
`;
