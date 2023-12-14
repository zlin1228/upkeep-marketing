import styled from 'styled-components';
import bgImg from '../../assets/background/hero-bg-dark.svg';

const variants = {
  Primary: `
    border: 2px solid #007bff;
    color: #ffffff;
    &:hover {
      background: #1F47CD;
      border: 2px solid #1F47CD;
      color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  `,
  'Primary-Light': `
    background: #ffffff;
    border: 2px solid #ffffff;
    color: #007bff;
    &:hover {
      background: #F5F6F9;
      border: 2px solid #F5F6F9;
      color: #1F47CD;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  `,
};

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 35vh;
  height: 100vh;
  width: 100%;
  background-color: #0b1a2b;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    padding: 25vh 32px 0px 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 570px;
  margin: 0 auto;
  text-align: center;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 44.79px;
  line-height: 115%;
  color: #ffffff;
`;

export const Subhead = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #f9f9f9;
`;

export const Buttons = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  margin: 24px auto 24px auto;
  button {
    width: auto;
    height: auto;
    padding: 16px 28px;
    border-radius: 6px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    transition: all 250ms ease-in-out;
  }
  button:first-child {
    margin-right: 8px;
  }
  button:last-child {
    margin-left: 8px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    button {
      width: 100%;
      padding: 14px 26px;
    }
    button:first-child {
      margin: 0px 0px 16px;
    }
    button:last-child {
      margin: 0px;
    }
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  ${props => variants[props?.variant]}
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f9f9f9;
  font-size: 14px;
  padding-bottom: 38px;
  p {
    margin-bottom: 8px;
  }
  a {
    color: #f9f9f9;
    &:hover {
      opacity: 0.5;
    }
  }
`;
