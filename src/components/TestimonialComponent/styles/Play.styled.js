import styled from 'styled-components';

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
  z-index: 500;
  svg {
    width: 95px;
    height: 95px;
    @media (max-width: 992px) {
      width: 127px;
      height: 127px;
    }
    @media (max-width: 675px) {
      width: 83px;
      height: 83px;
    }
    @media (max-width: 499px) {
      width: 54px;
      height: 54px;
    }
  }
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
