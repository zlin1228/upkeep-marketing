import styled from 'styled-components';

export const ControlsWrapper = styled.div`
  grid-area: controls;
  width: 100%;
  max-width: 84.5vw;
  height: auto;
  padding: 0px 15.75vw 0 0px;
  margin: 32px 0px 15px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    max-width: 89vw;
  }
  @media (max-width: 576px) {
    grid-template-columns: 94vw 1fr;
    justify-content: center;
  }
  @media (max-width: 375px) {
    grid-template-columns: 96vw 1fr;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PaginationItem = styled.div`
  width: 8px;
  height: 8px;
  opacity: ${props => (props.active === props.id ? 1 : 0.5)};
  background: #33394b;
  border-radius: 9999px;
  margin-right: 12px;
`;
export const ButtonsWrapper = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    display: none;
  }
`;
export const Pre = styled.button`
  width: fit-content;
  height: auto;
  padding: 0px;
  outline: none;
  border: none;
  border-radius: 50%;
  background: none;
  margin-right: 8px;
  svg {
    fill: none;
    path {
      fill: #33394b;
    }
    rect {
      stroke: #33394b;
    }
  }
  &:hover {
    outline: none;
    border: none;
    background: none;
    svg {
      fill: #33394b;
      path {
        fill: #ffffff;
      }
      rect {
        stroke: #ffffff;
      }
    }
  }
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;
export const Next = styled.button`
  width: fit-content;
  height: auto;
  padding: 0px;
  outline: none;
  border: none;
  border-radius: 50%;
  background: none;
  svg {
    fill: none;
    path {
      fill: #33394b;
    }
    rect {
      stroke: #33394b;
    }
  }
  &:hover {
    outline: none;
    border: none;
    background: none;
    svg {
      fill: #33394b;
      path {
        fill: #ffffff;
      }
      rect {
        stroke: #ffffff;
      }
    }
  }
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;
