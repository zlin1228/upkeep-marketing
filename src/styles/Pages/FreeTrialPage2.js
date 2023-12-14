import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  width: 100vw;
  height: auto;
  padding: 0px;
  margin: 0px;
  background: #00254c;
  @media (max-width: 991px) {
    height: auto;
    min-height: initial;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    min-height: initial;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 33px;
  background: ${props => props?.background};
  @media (max-width: 991px) {
    width: 100%;
    min-height: initial;
    flex-direction: column;
    padding: 33px 15px 64px;
  }
`;
export const Logo = styled.div`
  position: absolute;
  top: 35px;
  left: 35px;
  z-index: 100;
  @media (max-width: 991px) {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0px 32px;
  }
  img {
    width: 150px;
    height: 40px;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  ${props => props.padding}
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 31.1px;
    line-height: 40px;
    color: #ffffff;
    margin-bottom: 24px;
  }
  span {
    color: #cce5ff;
  }
`;
export const Subhead = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #f5f6f9;
  margin-bottom: 24px;
  strong {
    display: contents;
    font-style: normal;
    font-weight: 600;
  }
  p {
    margin-bottom: 16px;
  }
  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    max-width: 480px;
    li {
      margin: 16px 0px;
      display: flex;
      flex-direction: column;
      padding: 0px;
      ul > li {
        font-size: 0.8rem;
        position: relative;
        list-style: circle;
      }
    }
  }
  & > ul > li {
    padding-left: 36px;
    position: relative;
    line-height: 24px;
    svg {
      stroke: #007bff;
    }
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 0;
      top: 3px;
      background-color: #007bff;
    }
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -1.5px;
      top: 3.2px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 18 14'%3e%3cpath fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' d='M1 7L6 12L17 1'/%3e%3c/svg%3e");
      background-position: 6px center;
      background-size: 10px;
      background-repeat: no-repeat;
    }
    ul {
      padding: 0;
    }
  }
`;
