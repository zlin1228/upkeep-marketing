import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const CustomForm = styled(Form)`
  width: 100%;
  height: auto;
  min-height: 42px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap !important;
  align-items: flex-start;
  @media (max-width: 991.98px) {
    margin-bottom: 30px;
  }
  .invalid-feedback.is-invalid {
    display: block !important;
    position: relative !important;
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
  .form-group {
    position: relative;
    margin: 0;
    flex-basis: 70%;
    @media (max-width: 600px) {
      flex-basis: auto;
    }

    .invalid-feedback {
      position: reltative;
      top: 100%;
      left: 0;
    }
  }
  @media (max-width: 575px) {
    flex-wrap: wrap;
    margin-bottom: 24px;
    .form-group {
      width: 100%;
      .invalid-feedback {
        position: relative;
        margin-bottom: 15px;
      }
    }
  }
`;

export const Button = styled.button`
  flex-basis: 30%;
  height: 100%;
  min-height: 48px;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.5px;
  padding: 12px 24px;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (max-width: 1150px) {
    flex-basis: 30%;
    padding: 10px 22px;
    font-size: 14px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    flex-basis: auto;
  }
`;

export const IconHolder = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  font-size: 16px;
  z-index: 10;
  @media (max-width: 575px) {
    top: 20%;
    transform: translateY(-20%);
  }
`;
export const InputEmail = styled(Form.Control)`
  padding-left: 14px;
  width: 100%;
  height: 100%;
  min-height: 48px;
  background-color: #ffffff;
  font-size: 0.833rem;
  box-shadow: 0px 4px 2px rgba(22, 29, 37, 0.05);
  border: 1px solid #eaeaec;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  &:focus {
    border: 1px solid #eaeaec;
  }
  @media (max-width: 1150px) {
    font-size: 14px;
    line-height: 19px;
    padding: 10px 20px;
    height: 44px !important;
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

export const Flex = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .btn {
    white-space: nowrap;
    line-height: 18px;
    letter-spacing: 0.5px;
    margin: 0;
    margin-left: 16px;
    padding: 14px 24px;
    font-size: 0.833rem;
    @media (max-width: 1100px) {
      padding: 10px 20px;
    }
    @media (max-width: 992px) {
      margin-left: 0;
    }
    @media (max-width: 575px) {
      width: 100%;
      border-radius: 3px;
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
  .form-group {
    position: relative;
    margin: 0;
  }
  @media (max-width: 991.98px) {
    margin-bottom: 30px;
  }
  @media (max-width: 575px) {
    flex-wrap: wrap;
    margin-bottom: 24px;
    .form-group {
      width: 100%;
      .invalid-feedback {
        position: relative;
        margin-bottom: 15px;
      }
    }
  }
`;
