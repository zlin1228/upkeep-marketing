import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const backgroundColorMappings = {
  light: 'background: #ffffff;',
  dark: 'background: #172636;',
  blue: 'background: #007bff;',
};

const buttonBackgrounds = {
  light: 'background: #007bff; color: #ffffff;',
  dark: 'background: #ffffff; color: #172636;',
  blue: 'background: #ffffff; color: #007bff;',
};

export const Container = styled.div`
  ${props => backgroundColorMappings[props.background]}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  width: 100%;
  height: 160px;
  border: 2px solid #007bff;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 40px auto;
  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
    padding: 32px 32px 40px 32px;
  }
`;
export const FormStyles = styled(Form)`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  max-width: 50%;
  width: 100%;
  max-height: 56px;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    flex-direction: column;
  }
  .form-group {
    position: relative;
    margin: 0;
    flex-basis: 75%;
    @media (max-width: 991px) {
      flex-basis: 100%;
      margin-bottom: 16px;
    }
    .invalid-feedback {
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
  label.mat-input-label {
    position: absolute;
    z-index: 0;
    top: 11px;
    left: 15px;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform-origin: left top;
    pointer-events: none;
    font-size: 15px;
  }
  @media (max-width: 991px) {
    flex-wrap: wrap;
    .form-group {
      width: 100%;
      .invalid-feedback {
        position: relative;
        margin-bottom: 15px;
      }
    }
  }
`;
export const InputEmail = styled(Form.Control)`
  padding-left: 14px;
  height: 48px !important;
  border: 1px solid #eaeaec;
  border-radius: 0;
  background-color: #ffffff;
  font-size: 0.833rem;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  &:focus {
    border: 1px solid #eaeaec;
  }
  @media (max-width: 1100px) {
    padding: 10px 20px;
    height: 44px !important;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 575px) {
    margin-bottom: 11px;
    border-radius: 3px 3px 3px 3px;
    max-width: 100%;
  }
  &:valid + label.mat-input-label,
  &:focus + label.mat-input-label {
    transform: translate(0, -22px) scale(0.75);
    background: #fff;
    padding: 2px 10px;
    border: 1px solid #eaeaec;
    z-index: 20;
  }
  &:focus + label.mat-input-label {
    background: #007bff;
    color: #fff;
    border-color: #007bff;
  }
`;
export const ButtonStyles = styled.button`
  width: 169px;
  height: 56px;
  outline: none;
  border: none;
  white-space: nowrap;
  letter-spacing: 0.5px;
  margin: 0px 0px 0px 16px;
  padding: 14px 20px;
  font-size: 0.833rem;
  height: 100%;
  ${props => buttonBackgrounds[props.background]}
  @media (max-width: 1100px) {
    padding: 10px 20px;
  }
  @media (max-width: 992px) {
    margin-left: 0;
    width: 100%;
    border-radius: 3px;
  }
`;
export const Success = styled.h3`
  color: #47b972 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  max-width: 50%;
  width: 100%;
  height: auto;
  @media (max-width: 991px) {
    height: auto;
    margin-bottom: 16px;
    max-width: 100%;
  }

  .heading {
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    color: #ffffff;
    margin-bottom: 0;
    @media (max-width: 991px) {
      font-size: 23px;
      line-height: 32px;
      width: 100%;
      height: auto;
    }
  }
  .subhead {
    position: static;
    width: 100%;

    font-style: normal;
    font-weight: normal;
    font-size: 18.6px;
    color: #ffffff;
    margin: 8px 0px;
    @media (max-width: 991px) {
      height: auto;
    }
  }
`;
