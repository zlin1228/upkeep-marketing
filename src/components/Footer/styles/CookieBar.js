import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: auto;
  min-height: 86px;
  background: linear-gradient(101.24deg, #000714 27.61%, #262c36 103.49%);
  z-index: 9999;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1045px;
  height: auto;
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  padding: 0px 24px;
  .logo {
    width: 88px;
    height: 23.09px;
    filter: brightness(0) invert(1);
    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
  @media (max-width: 768px) {
    display: block;
    padding: 16px 24px;
  }
  @media (max-width: 575px) {
    max-width: 411px;
    height: auto;
    margin: 0px;
  }
`;
export const Text = styled.h6`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
  margin: 0px 32px;
  @media (max-width: 1024px) {
    font-size: 13.5px;
    line-height: 20px;
    margin: 0px 16px;
  }
  @media (max-width: 768px) {
    margin: 0px 0px 16px 0px;
  }
  a {
    color: #fff;
    text-decoration: underline;
    transition: all 250ms ease-in-out;
    &:hover {
      color: #cfd6e2;
    }
  }
`;
export const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: auto;
  height: 41px;
  border: 2px solid #ffffff;
  background: transparent;
  border-radius: 4px;
  padding: 10px 24px;
  margin: 0px 24px 0px 0px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  color: #ffffff;
  transition: all 250ms ease-in-out;
  &:hover {
    background: white;
    color: #111723;
    outline: none;
  }
  @media (max-width: 1024px) {
    font-size: 13.5px;
    line-height: 20px;
  }
`;
export const Cancel = styled.button`
  width: auto;
  height: auto;
  border: none;
  background: none;
  outline: none;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  &:hover {
    background: none;
    outline: none;
  }
`;
