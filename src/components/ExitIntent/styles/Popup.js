import styled from 'styled-components';
import { color } from '../../../atoms/colors';

export const Modal = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0px auto;
  z-index: 9999;
  cursor: initial;
  @media (max-width: 991px) {
    padding: 0px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: auto;
  cursor: initial;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0px auto;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 499px) {
    padding: 0px;
  }
`;

export const CloseBtn = styled.button`
  position: relative;
  top: -10px;
  right: -20px;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  padding: 0px;
  margin: 0px;
  background: none;
  outline: none;
  box-shadow: none;
  border: none;
  opacity: 1;
  transition: all 0.3s ease;
  @media (max-width: 991px) {
    top: -15px;
    right: 0px;
  }
  &:hover {
    background: none;
    outline: none;
    border: none;
    opacity: 0.5;
  }

  &:focus {
    background: none;
    outline: none;
    border: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 970px;
  height: auto;
  margin: 0px auto;
  background: #ffffff;
  border: 1px solid #a9acb1;
  border-radius: 16px;
  overflow: hidden;
  ${props =>
    props?.hasImage &&
    `
    display: grid;
    grid-template-columns: 1fr 570px;
    grid-auto-rows: auto;
    gap: 0px;
    border: none;
  `}
  @media (max-width: 991px) {
    display: block;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 418px;
  img {
    width: 426px;
    height: 100%;
    object-fit: cover;
    @media (max-width: 991px) {
      width: 100%;
      object-fit: unset;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: auto;
  margin: auto;

  ${props =>
    props?.hasImage
      ? `
  max-width: 488px;
  padding: 15px;
  `
      : `
  max-width: 570px;
  padding: 32px;
  `}

  @media (max-width: 991px) {
    padding: 32px;
  }
  @media (max-width: 499px) {
    padding: 32px 24px;
  }
`;

export const Details = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

export const Heading = styled.div`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 33.32px;
  line-height: 48px;
  margin-bottom: 16px;
  color: #00254c;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 33.32px;
    line-height: 48px;
    margin-bottom: 0px;
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 0px;
    }
  }
  span {
    color: #056eff;
  }
`;

export const Subhead = styled.div`
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 16.2px;
  line-height: 24px;
  color: #515667;
  margin-bottom: 16px;
  text-align: center;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0px;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }
    @media (max-width: 350px) {
      font-size: 10px;
      line-height: 16px;
    }
  }
  @media (max-width: 768px) {
    padding: 0px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: #007bff;
  color: white;
  transition: all 300ms ease-in-out;
  border-radius: 6px;
  &:hover,
  &:focus {
    background: #0056b3;
    color: white;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const PrivacyPolicy = styled.p`
  width: 100%;
  height: auto;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #515667;
  text-align: center;
  margin: 0px;
  a {
    color: ${color.primary[700]};
    &:hover {
      color: ${color.primary[400]};
    }
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

export const CallToActionStyles = `
display: block;
width: 100%;
height: 44px;
text-align: center;
background: #007bff;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
transition: 300ms ease-in-out;
font-weight: bold;
font-size: 16px;
letter-spacing: 0.5px;
&:hover {
  color: white;
  background: #0056b3;
}
`;
