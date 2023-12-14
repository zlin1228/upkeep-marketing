import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  ${props =>
    props.type === 'Popup' &&
    `display: grid; place-items: center; padding: 0px 15px;`}
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: -1;
  cursor: pointer;
  &.active {
    opacity: 1;
    z-index: 9998;
  }
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9998;
`;
