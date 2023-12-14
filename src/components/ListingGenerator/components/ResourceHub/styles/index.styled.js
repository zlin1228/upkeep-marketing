import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 96px 0px;
  overflow: hidden;
  ${props => props?.theme === 'gray' && `background-color: #F5F6F9;`}
  @media (max-width: 576px) {
    padding: 48px 0px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: auto;
  padding: 0px 35px;
  margin: 0px auto;
  @media (max-width: 992px) {
    max-width: 840px;
  }
  @media (max-width: 499px) {
    padding: 0px 15px;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    color: #0d141a;
    margin-bottom: 0px;
  }
  a {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #007bff;
    @media (max-width: 576px) {
      margin-top: 24px;
    }
    svg {
      margin-left: 9px;
      path {
        transition: all 300s ease-in-out;
      }
    }
    &:hover {
      svg use {
        fill: #0056b3;
      }
    }
  }
`;
