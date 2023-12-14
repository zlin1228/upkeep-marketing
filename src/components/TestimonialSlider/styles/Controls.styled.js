import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1230px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
  padding: 0px 30px;
  transform: translateX(10px);
  @media (max-width: 1200px) {
    justify-content: center;
  }
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
    outline: none;
    border: none;
    background: #33394b;
    opacity: 1;
  }
`;
export const Button = styled.button`
  position: relative;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  z-index: 999;
  border-radius: 9999px;
  transition: all 250ms ease-in-out;
  @media (max-width: 1200px) {
    display: none;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    z-index: -1;
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus {
    background: none;
    outline: none;
    border: none;
    &::before {
      background: #33394b;
    }
    svg path {
      background: #33394b;
      fill: #fff;
      z-index: 100;
    }
  }
`;
export const PlayButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  z-index: 1000;
  svg circle {
    transition: all 250ms ease-in-out;
  }
  &:hover,
  &:focus {
    background: none;
    outline: none;
    border: none;
    svg circle {
      fill: #008fff;
    }
  }
`;
